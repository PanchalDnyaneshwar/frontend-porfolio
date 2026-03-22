export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  portfolio?: string;
}

export interface Profile {
  _id?: string;
  fullName: string;
  title: string;
  shortBio?: string;
  longBio?: string;
  email: string;
  phone?: string;
  location?: string;
  profileImage?: string;
  resumeUrl?: string;
  socialLinks?: SocialLinks;
}