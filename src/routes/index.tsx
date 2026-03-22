import { Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AboutPage from '@/pages/AboutPage';
import BlogDetailsPage from '@/pages/BlogDetailsPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';
import ExperiencePage from '@/pages/ExperiencePage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProjectDetailsPage from '@/pages/ProjectDetailsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import SkillsPage from '@/pages/SkillsPage';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;