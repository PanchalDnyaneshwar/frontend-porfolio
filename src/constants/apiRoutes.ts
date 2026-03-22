export const API_ROUTES = {
  auth: {
    login: '/auth/login',
  },
  profile: {
    public: '/profile',
  },
  settings: {
    public: '/settings',
  },
  skills: {
    public: '/skills',
  },
  experience: {
    public: '/experience',
  },
  projects: {
    public: '/projects',
    bySlug: (slug: string) => `/projects/slug/${slug}`,
  },
  blogs: {
    public: '/blogs',
    bySlug: (slug: string) => `/blogs/slug/${slug}`,
  },
  contact: {
    create: '/contact',
  },
};