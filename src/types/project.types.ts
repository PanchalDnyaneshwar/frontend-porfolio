export interface Project {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription?: string;
  thumbnail?: string;
  images: string[];
  techStack: string[];
  category?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  sortOrder: number;
  isPublished: boolean;
}

export interface ProjectFilterState {
  search: string;
  category: string;
}