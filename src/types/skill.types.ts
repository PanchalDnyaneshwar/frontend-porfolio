export interface Skill {
  _id: string;
  name: string;
  category: string;
  level?: string;
  icon?: string;
  sortOrder: number;
  isActive: boolean;
}