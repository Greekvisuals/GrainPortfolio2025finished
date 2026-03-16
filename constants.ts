
import { Project, Review } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '2',
    title: 'VisitNorway',
    category: 'Mini Film',
    year: '2023',
    client: 'Visit Norway',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Visit%20Norway%20Ny%20grade%20best2.mp4?alt=media&token=53116da2-ebf0-4325-84d9-cc5ece3813a7',
    format: 'landscape',
    headline: 'A journey through the silence of the fjords.',
    description: 'Captured during the transition of seasons, this piece explores the raw, untouched beauty of the Norwegian landscape. We utilized natural light and handheld camera movements to create an intimate, grounded perspective that invites the viewer to breathe in the cold mountain air.',
    credits: [
      { role: 'Director', name: 'John Antonsen' },
      { role: 'Cinematographer', name: 'Grain Studio' },
      { role: 'Editor', name: 'John Antonsen' },
      { role: 'Sound', name: 'Echo Lab' }
    ]
  },
  {
    id: '1',
    title: 'Dreamer - Rainforest',
    category: 'Commercial',
    year: '2022',
    client: 'EcoTravel',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Estepona%20Orchide%20Estpona2.mp4?alt=media&token=b69af29d-f568-4ddc-b9c5-79dc374b96b2',
    format: 'landscape',
    headline: 'Immersion into the breathing heart of the jungle.',
    description: 'A sensory-driven commercial designed to evoke the humidity, texture, and vibrant life of the rainforest. The sound design plays a pivotal role, weaving together the calls of wildlife with a rhythmic, driving score that mimics the pulse of the forest itself.',
    credits: [
      { role: 'Director', name: 'Sarah Jenkins' },
      { role: 'DOP', name: 'Marcus Thorne' },
      { role: 'Colorist', name: 'Prism Post' }
    ]
  },
  {
    id: '3',
    title: 'Echoes of Us',
    category: 'Wedding Film',
    year: '2023',
    client: 'Private Client',
    videoUrl: 'https://framerusercontent.com/assets/Qd3Ic7sGavLSLs8uRt69vDA9tTc.mp4',
    format: 'landscape',
    headline: 'A timeless document of love and connection.',
    description: 'Moving beyond the traditional wedding video, this film focuses on the quiet, unseen moments between the couple. Shot on 16mm film stock to provide a nostalgic, permanent feeling to fleeting memories.',
    credits: [
        { role: 'Filmmaker', name: 'Grain Studio' },
        { role: 'Editor', name: 'Grain Studio' }
    ]
  },
  {
    id: '4',
    title: 'Still Breathing',
    category: 'Brand Film',
    year: '2025',
    client: 'Zephyr & Loom',
    videoUrl: 'https://framerusercontent.com/assets/rujes19qnH473SeNzCgMuihBfOs.mp4',
    format: 'landscape',
    headline: 'A docu-style branded film spotlighting a slow fashion brand.',
    description: 'Filmed in natural light using handheld lenses, this piece follows artisans in rural studios. The result: a tender visual essay on craftsmanship, sustainability, and soul. We aimed to slow down the viewer\'s pulse and align it with the meticulous pace of the creators on screen.',
    credits: [
      { role: 'Director', name: 'Mason Varga' },
      { role: 'Cinematographer', name: 'Ava Noor' },
      { role: 'Editor', name: 'Ember Hale' },
      { role: 'Sound Design', name: 'Isa Kray' },
      { role: 'Producer', name: 'Elen Hart' }
    ]
  },
  {
    id: '5',
    title: 'Scent & Silence',
    category: 'Commercial',
    year: '2022',
    client: 'Aesop',
    videoUrl: 'https://framerusercontent.com/assets/8s2BBmflDJt5OXnAkNfeLkErqw.mp4',
    format: 'landscape',
    headline: 'Visualizing the invisible notes of fragrance.',
    description: 'How do you film a scent? We answered this by focusing on texture—smoke, water, skin, and stone. The result is an abstract visual poem that suggests aroma through visual tactile cues.',
    credits: [
        { role: 'Director', name: 'Grain Studio' },
        { role: 'Set Design', name: 'Lina V' }
    ]
  },
  {
    id: '6',
    title: 'The Light Between',
    category: 'Short Film',
    year: '2025',
    client: 'Independent',
    videoUrl: 'https://framerusercontent.com/assets/HSdtyJ3OPhdFnShRKCkpEs238.mp4',
    format: 'landscape',
    headline: 'A narrative exploration of distance and longing.',
    description: 'Set in a near-future metropolis, this short film uses stark architectural compositions and neon lighting to isolate characters in the frame, physically representing their emotional distance.',
    credits: [
        { role: 'Director', name: 'John Antonsen' },
        { role: 'Writer', name: 'K. Miller' },
        { role: 'DOP', name: 'Grain Studio' }
    ]
  },
  // Vertical Mock Data
  {
    id: 'v1',
    title: 'Kinetic Form',
    category: 'Showcase',
    year: '2025',
    client: 'Nike Sportswear',
    videoUrl: 'https://framerusercontent.com/assets/8s2BBmflDJt5OXnAkNfeLkErqw.mp4', 
    format: 'vertical',
    headline: 'Motion in its purest form.',
    description: 'A high-energy vertical campaign designed for social media impact. Focusing on the geometry of human movement and sportswear technology.',
    credits: [
        { role: 'Director', name: 'Grain Studio' },
        { role: 'Edit', name: 'FastCut Inc' }
    ]
  },
  {
    id: 'v2',
    title: 'Polestar',
    category: 'Showcase',
    year: '2024',
    client: 'Polestar Automotive',
    videoUrl: 'https://framerusercontent.com/assets/dRHWzVptVvpgdXINm46ZLtoiwoY.mp4',
    format: 'vertical',
    headline: 'Minimalist design meets electric performance.',
    description: 'Capturing the silent power of the Polestar 3. Clean lines, cold tones, and smooth camera movements mirror the vehicle\'s engineering philosophy.',
    credits: [
        { role: 'Director', name: 'John Antonsen' },
        { role: 'DOP', name: 'Ava Noor' }
    ]
  },
  {
    id: 'v3',
    title: 'Frame Signal',
    category: 'Showcase',
    year: '2025',
    client: 'Sony Alpha',
    videoUrl: 'https://framerusercontent.com/assets/z4Oilzyk8mFMgNgJGrjfmEBBNE.mp4',
    format: 'vertical',
    headline: 'Capturing the creators.',
    description: 'A meta-documentary series following street photographers in Tokyo. Gritty, grainy, and authentic.',
    credits: [
        { role: 'Director', name: 'Mason Varga' }
    ]
  },
  {
    id: 'v4',
    title: 'Arclight',
    category: 'Showcase',
    year: '2025',
    client: 'Arclight Cinema',
    videoUrl: 'https://framerusercontent.com/assets/rujes19qnH473SeNzCgMuihBfOs.mp4', 
    format: 'vertical',
    headline: 'The magic of the silver screen, reimagined.',
    description: 'A branding piece for the relaunch of a historic cinema. Mixing archival footage with modern digital cinematography.',
    credits: [
        { role: 'Creative Dir', name: 'Ember Hale' }
    ]
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    clientName: 'Marcus Thorne',
    company: 'TrailBerg',
    text: "Grain. captured the essence of our collection with a cinematic depth we didn't think possible. The color grading was exquisite.",
    rating: 5
  },
  {
    id: 'r2',
    clientName: 'Elena Garcia',
    company: 'Orchide Garden',
    text: "Professional, visionary, and incredibly efficient. The brand film they produced has become the cornerstone of our marketing.",
    rating: 5
  },
  {
    id: 'r3',
    clientName: 'Linda Rostova',
    company: 'Independent Director',
    text: "Working with them on one of my shortfilm quite place was a masterclass in production workflow. They elevated every frame.",
    rating: 5
  }
];

export const SERVICES = [
  "Brand Films",
  "Event Cinematography",
  "Athlete Documentary",
  "Fashion Films",    
  "Commercials & Ad Spots",
  "Wedding Films",
  "Documentary Shorts",
  "Creative Direction"
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We begin by understanding your brand’s core voice. We strip away the noise to find the narrative thread that will resonate most deeply with your audience."
  },
  {
    number: "02",
    title: "Pre-Production",
    description: "Meticulous planning. We scout locations, cast talent, and storyboard every frame to ensure the vision is airtight before the camera rolls."
  },
  {
    number: "03",
    title: "Production",
    description: "The execution. We utilize high-end cinema equipment and lighting to capture your story with an aesthetic that feels expensive, organic, and intentional."
  },
  {
    number: "04",
    title: "Post-Production",
    description: "Where the magic solidifies. Editing, color grading, and sound design come together to sculpt the final emotional arc of the film."
  }
];

export const TEAM_MEMBERS = [
  {
    name: "John Antonsen",
    role: "Director / DOP / Head of Post",
    image: "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/John%20med%20Gimbal%20Headshots.jpg?alt=media&token=5f097cfb-fc41-4750-8139-2ca421bd7457"
  },
  {
    name: "Elise Bjørnøs",
    role: "Creative Producer",
    image: "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Elise%20Headshot%20Best.jpg?alt=media&token=8b0e7edd-d98f-48b0-a8a0-ef5cf7ad80c8"
  },
  {
    name: "Carlos Sanches",
    role: "Head of Communication",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
  }
];
