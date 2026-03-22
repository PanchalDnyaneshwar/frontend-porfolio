import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import SocialLinks from '@/components/layout/SocialLinks';
import type { Profile } from '@/types/profile.types';

interface HeroSectionProps {
  profile?: Profile | null;
}

function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-hero-glow bg-cover">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20" />
      <Container className="relative grid min-h-[calc(100vh-64px)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Full Stack Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {profile?.fullName || 'Dnyaneshwar Panchal'}
            <span className="mt-2 block text-slate-300">
              {profile?.title || 'Building scalable and modern web applications.'}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            {profile?.shortBio ||
              'I build responsive, reliable and polished digital experiences using React, Tailwind CSS, NestJS and MongoDB with clean architecture and strong business logic.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects">
              View Projects <ArrowRight className="ml-2" size={18} />
            </Button>

            {profile?.resumeUrl ? (
              <Button href={profile.resumeUrl} target="_blank" rel="noreferrer" variant="outline">
                Download Resume <Download className="ml-2" size={18} />
              </Button>
            ) : (
              <Button href="/contact" variant="outline">
                Contact Me <Mail className="ml-2" size={18} />
              </Button>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <SocialLinks links={profile?.socialLinks} email={profile?.email} />

            {profile?.socialLinks?.github ? (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2 text-slate-300 hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
            ) : null}

            {profile?.socialLinks?.linkedin ? (
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2 text-slate-300 hover:text-white"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="glass-card rounded-3xl p-6 shadow-soft">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
              {profile?.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={profile.fullName || 'Profile'}
                  className="h-[360px] w-full object-cover"
                />
              ) : (
                <div className="flex h-[360px] items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-primary">DP</p>
                    <p className="mt-3 text-sm text-slate-500">Developer Portfolio</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xl font-bold text-white">React</p>
                <p className="mt-1 text-sm text-slate-400">Frontend</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xl font-bold text-white">NestJS</p>
                <p className="mt-1 text-sm text-slate-400">Backend</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xl font-bold text-white">MongoDB</p>
                <p className="mt-1 text-sm text-slate-400">Database</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xl font-bold text-white">Responsive</p>
                <p className="mt-1 text-sm text-slate-400">All Devices</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;