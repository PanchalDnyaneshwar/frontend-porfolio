export const QUERY_KEYS = {
  profile: ['profile'],
  settings: ['settings'],
  skills: ['skills'],
  experiences: ['experiences'],
  projects: ['projects'],
  project: (slug: string) => ['project', slug],
  blogs: ['blogs'],
  blog: (slug: string) => ['blog', slug],
} as const;