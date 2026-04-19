
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
  "Athlete Documentary",
  "Commercials & Ad Spots",
  "Documentary Shorts",
  "Fashion Films",    
  "Event Cinematography",
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

export const CINEMA_GALLERY_IMAGES = [
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-18%20012135_9.5.1.jpg?alt=media&token=6a159da6-cb26-4832-aa53-0acfb35732d1",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-20%20073114_47.2.3.jpg?alt=media&token=f42d7024-17e3-4dba-9a58-73b7dd7eef1e",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-18%20012145_7.2.1.jpg?alt=media&token=f84928e2-b830-4abb-9f29-25eacb20abf9",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-18%20134802_15.1.1.jpg?alt=media&token=8f85e1cf-4dcb-4d98-8b99-6d5d0a80530f",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-18%20134757_14.2.1.jpg?alt=media&token=f73e1e4d-726d-4392-aa0e-b757f2630f25",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-18%20134918_51.1.1.jpg?alt=media&token=15e32340-fb07-41fe-9e24-0574f96cdf69",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-18%20140800_36.3.1.jpg?alt=media&token=d2d29756-ec01-4ce0-8724-f21caab34119",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-18%20140900_63.3.1.jpg?alt=media&token=4aa92fc2-a55b-4fe4-8934-d814ea006609",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-18%20144120_58.4.1.jpg?alt=media&token=e9ace4ca-1caf-4039-937c-84487d227c07",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-02-09%20155057_17.8.4.jpg?alt=media&token=27990b58-25b1-47d9-b6ef-89d0037af4ba",
  "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Cinema%20Gallery%2FStill%202026-03-19%20110408_1.4.1.jpg?alt=media&token=592ab402-7635-4b7b-939d-5bff812b73ae",
];

export const TEAM_MEMBERS = [
  {
    name: "John Antonsen",
    role: "Director / DOP / Head of Post",
    image: "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Still%202026-04-19%20120121_1.25.17.jpg?alt=media&token=a8243925-9861-42e6-8427-d74b4387513e"
  },
  {
    name: "Elise Bjørnøs",
    role: "Creative Producer",
    image: "https://firebasestorage.googleapis.com/v0/b/grain-studio.firebasestorage.app/o/Still%202026-04-19%20163557_2.7.1.jpg?alt=media&token=73614452-7c7b-46bd-bad9-f8849827e898"
  },
];

export const SEO_FAQS = [
  {
    question: "What makes your video production in Marbella different from everyone else?",
    answer: "As a premier video production company in Marbella, we don't just shoot videos; we craft cinematic brand films. Our approach combines high-end cinema cameras, meticulous lighting, and Hollywood-grade color grading to ensure your brand stands out globally. We understand the unique luxury market of Marbella and translate that into visual storytelling."
  },
  {
    question: "Do you only produce brand films in Marbella?",
    answer: "While our roots and primary studio are based in Marbella, Spain and Oslo, Norway, we produce cinematic brand films worldwide. Our team frequently travels internationally for clients who demand the highest tier of visual storytelling, bringing our signature cinematic aesthetic to global campaigns."
  },
  {
    question: "What is a cinematic brand film?",
    answer: "A cinematic brand film is a high-end promotional video that utilizes the techniques, equipment, and narrative structures of feature films. Unlike standard corporate videos, cinematic brand films focus on emotional resonance, breathtaking visuals, and compelling storytelling to elevate your brand's perception and connect deeply with your audience."
  },
  {
    question: "How long does a typical video production project take?",
    answer: "For a premium brand film in Marbella or internationally, the timeline typically ranges from 2 to 4 weeks. This includes pre-production (concept development, scripting, location scouting), production (filming), and post-production (editing, sound design, color grading). We ensure every frame meets our rigorous cinematic standards."
  },
  {
    question: "Do you handle the entire video production process?",
    answer: "Yes, we are a full-service video production agency. From the initial creative concept to the final color-graded cinematic brand film, we handle everything. This includes casting, location scouting in Marbella and beyond, directing, filming, and comprehensive post-production."
  }
];
