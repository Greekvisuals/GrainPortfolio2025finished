import React, { useEffect, useRef } from 'react';

export const GrainOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Generate a noise pattern on an offscreen canvas
    // We create a tileable pattern of noise that we will shift randomly
    const patternSize = 256;
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const pCtx = patternCanvas.getContext('2d');
    
    if (pCtx) {
        const pData = pCtx.createImageData(patternSize, patternSize);
        const buffer = new Uint32Array(pData.data.buffer);
        const len = buffer.length;
        
        for (let i = 0; i < len; i++) {
             // Generate random noise
             const random = Math.random();
             
             // Adjust density (0.4 means 40% of pixels have noise)
             if (random < 0.4) { 
                // White pixel with varying alpha for depth
                // Alpha between 20 and 60 (out of 255) for visibility
                const alpha = Math.floor(Math.random() * 30) + 20;
                
                // Little Endian: AABBGGRR -> 0xAAFFFFFF (White with Alpha)
                buffer[i] = (alpha << 24) | 0x00FFFFFF;
             } else {
                buffer[i] = 0; // Transparent
             }
        }
        pCtx.putImageData(pData, 0, 0);
    }

    const resize = () => {
      // Set canvas size to match window
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
        if (!ctx) return;
        
        // Randomly offset the pattern every frame to create "static" effect
        const xOffset = Math.random() * patternSize;
        const yOffset = Math.random() * patternSize;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const pattern = ctx.createPattern(patternCanvas, 'repeat');
        if (pattern) {
            ctx.fillStyle = pattern;
            ctx.save();
            // Translate the pattern context
            ctx.translate(xOffset, yOffset);
            // Draw a rect large enough to cover the screen plus the offset
            ctx.fillRect(-patternSize, -patternSize, canvas.width + patternSize, canvas.height + patternSize);
            ctx.restore();
        }

        animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-30"
    />
  );
};
