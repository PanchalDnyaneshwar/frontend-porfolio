export const APP_ROUTES = {
  home: '/',
  about: '/about',
  skills: '/skills',
  experience: '/experience',
  projects: '/projects',
  projectDetails: (slug: string) => `/projects/${slug}`,
  blog: '/blog',
  blogDetails: (slug: string) => `/blog/${slug}`,
  contact: '/contact',
} as const;