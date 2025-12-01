
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  videoUrl: string;
  description?: string;
  createdAt?: number;
  format?: 'landscape' | 'vertical';
  // New fields for Detail View
  client?: string;
  headline?: string;
  credits?: { role: string; name: string }[];
}

export interface Review {
  id: string;
  clientName: string;
  company: string;
  text: string;
  rating: number;
}

export enum ViewState {
  HOME = 'HOME',
  UPLOAD = 'UPLOAD'
}
