import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { generateProjectDescription } from '../services/geminiService';
import { uploadVideoToStorage, addProjectToFirestore, loginUser, subscribeToAuthChanges } from '../services/firebaseService';
import { User } from 'firebase/auth';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (project: Project) => void;
}

type InputType = 'file' | 'url';
type VideoFormat = 'landscape' | 'vertical';

export const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Auth State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Upload State
  const [videoFormat, setVideoFormat] = useState<VideoFormat>('landscape');
  const [inputType, setInputType] = useState<InputType>('file');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [videoUrlInput, setVideoUrlInput] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsLoggingIn(true);
    try {
      await loginUser(email, password);
      // Login successful, user state will update via observer
    } catch (error: any) {
      console.error("Login failed", error);
      setAuthError('Invalid email or password.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGenerateDescription = async () => {
    if (!title || !category) return;
    setIsGenerating(true);
    const desc = await generateProjectDescription(title, category);
    setDescription(desc);
    setIsGenerating(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) return;
    if (inputType === 'file' && !file) return;
    if (inputType === 'url' && !videoUrlInput) return;

    setIsUploading(true);

    try {
      let finalVideoUrl = videoUrlInput;

      if (inputType === 'file' && file) {
        finalVideoUrl = await uploadVideoToStorage(file);
      }

      const newProjectData = {
        title,
        category,
        year: new Date().getFullYear().toString(),
        videoUrl: finalVideoUrl,
        description,
        createdAt: Date.now(),
        format: videoFormat
      };

      const savedProject = await addProjectToFirestore(newProjectData);
      onUpload(savedProject);
      handleClose();
    } catch (error) {
      console.error("Failed to upload project", error);
      alert("Failed to upload project. Check your permissions or try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form
    setTitle('');
    setCategory('');
    setFile(null);
    setVideoUrlInput('');
    setDescription('');
    setIsUploading(false);
    setInputType('file');
    setEmail('');
    setPassword('');
    setAuthError('');
    setVideoFormat('landscape'); // Reset format
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={!isUploading ? handleClose : undefined} />
      
      <div className="relative bg-[#111] border border-white/10 w-full max-w-lg p-8 rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* LOGIN VIEW */}
        {!user ? (
          <div>
            <h2 className="text-2xl font-display uppercase text-white mb-2">Admin Access</h2>
            <p className="text-white/60 text-xs mb-6">Please sign in to manage projects.</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="admin@grain.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {authError && (
                <p className="text-red-500 text-xs">{authError}</p>
              )}

              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={handleClose}
                  className="flex-1 py-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all uppercase text-xs tracking-widest"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={!email || !password || isLoggingIn}
                  className="flex-1 py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase text-xs tracking-widest font-bold disabled:opacity-50 flex items-center justify-center"
                >
                  {isLoggingIn ? 'Verifying...' : 'Enter Studio'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* UPLOAD VIEW (Authenticated) */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display uppercase text-white">Upload Project</h2>
              <span className="text-xs text-white/40">Logged in as {user.email}</span>
            </div>

            {/* Format Selection */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Project Format</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setVideoFormat('landscape')}
                  className={`border p-4 rounded-lg flex flex-col items-center gap-2 transition-all ${
                    videoFormat === 'landscape' 
                      ? 'border-white bg-white/10 text-white' 
                      : 'border-white/10 text-white/40 hover:border-white/30'
                  }`}
                >
                  <div className="w-12 h-8 border-2 border-current rounded-sm"></div>
                  <span className="text-xs uppercase tracking-wider">Cinematic</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVideoFormat('vertical')}
                  className={`border p-4 rounded-lg flex flex-col items-center gap-2 transition-all ${
                    videoFormat === 'vertical' 
                      ? 'border-white bg-white/10 text-white' 
                      : 'border-white/10 text-white/40 hover:border-white/30'
                  }`}
                >
                  <div className="w-6 h-10 border-2 border-current rounded-sm"></div>
                  <span className="text-xs uppercase tracking-wider">Vertical</span>
                </button>
              </div>
            </div>
            
            {/* Input Type Switcher */}
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setInputType('file')}
                className={`flex-1 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                  inputType === 'file' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                Upload File
              </button>
              <button
                type="button"
                onClick={() => setInputType('url')}
                className={`flex-1 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                  inputType === 'url' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                Paste URL
              </button>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Project Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                placeholder="e.g. Neon Nights"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition-colors"
              >
                <option value="">Select Category</option>
                <option value="Brand Film">Brand Film</option>
                <option value="Commercial">Commercial</option>
                <option value="Short Film">Short Film</option>
                <option value="Music Video">Music Video</option>
                <option value="UGC">UGC</option>
                <option value="Showcase">Showcase</option>
              </select>
            </div>

            {inputType === 'file' ? (
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Video File</label>
                <input 
                  type="file" 
                  accept="video/*"
                  onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                  className="w-full bg-white/5 border border-white/10 p-3 text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
                />
              </div>
            ) : (
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Video URL</label>
                <input 
                  type="url" 
                  value={videoUrlInput}
                  onChange={(e) => setVideoUrlInput(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="https://example.com/my-video.mp4"
                />
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs uppercase tracking-widest text-white/60">Description</label>
                <button 
                  type="button" 
                  onClick={handleGenerateDescription}
                  disabled={!title || !category || isGenerating}
                  className="text-xs text-[#0099ff] hover:text-[#33adff] disabled:text-gray-600 disabled:cursor-not-allowed uppercase tracking-wider flex items-center gap-1"
                >
                  {isGenerating ? 'Dreaming...' : '✨ Generate with AI'}
                </button>
              </div>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition-colors h-24 resize-none"
                placeholder="Enter description or generate one..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={handleClose}
                disabled={isUploading}
                className="flex-1 py-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all uppercase text-xs tracking-widest disabled:opacity-50"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={(inputType === 'file' && !file) || (inputType === 'url' && !videoUrlInput) || !title || isUploading}
                className="flex-1 py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase text-xs tracking-widest font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isUploading ? (
                  <>
                    <div className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Upload Project'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};