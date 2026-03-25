import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import SocialLinks from '@/components/layout/SocialLinks';
import type { Profile } from '@/types/profile.types';

interface HeroSectionProps {
  profile?: Profile | null;
}

function HeroSection({ profile }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const highlightItems = [
    { title: 'Frontend', value: 'React + Tailwind' },
    { title: 'Backend', value: 'NestJS APIs' },
    { title: 'Database', value: 'MongoDB Models' },
    { title: 'Quality', value: 'Responsive UI' },
  ];

  return (
    <section className="relative overflow-hidden bg-hero-glow bg-cover">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <Container className="relative grid min-h-[calc(100vh-72px)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16 lg:py-20 xl:py-24">
        <motion.div
          className="max-w-3xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="display-kicker mb-4 text-primary">
            Full Stack Developer
          </p>

          <h1 className="display-title text-4xl leading-[1.02] sm:text-5xl md:text-6xl xl:text-[4.5rem]">
            {profile?.fullName || 'Dnyaneshwar Panchal'}
            <span className="mt-3 block text-zinc-700">
              {profile?.title || 'Building scalable and modern web applications.'}
            </span>
          </h1>

          <p className="display-copy mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg">
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:max-w-2xl">
            {highlightItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-[#fcfaf6] px-4 py-4 shadow-soft"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 + index * 0.04 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                  {item.title}
                </p>
                <p className="mt-2 text-base font-semibold text-zinc-900">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <SocialLinks links={profile?.socialLinks} email={profile?.email} />

            {profile?.socialLinks?.github ? (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-[#fcfaf6] px-4 py-2 text-zinc-700 hover:text-zinc-900"
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
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-[#fcfaf6] px-4 py-2 text-zinc-700 hover:text-zinc-900"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-lg"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        >
          <div className="glass-card rounded-[2rem] p-4 shadow-soft sm:p-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-[#f3ede4]">
              {profile?.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={profile.fullName || 'Profile'}
                  className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                />
              ) : (
                <div className="flex h-[300px] items-center justify-center sm:h-[360px] lg:h-[420px]">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-primary">DP</p>
                    <p className="mt-3 text-sm text-zinc-500">Developer Portfolio</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
              {highlightItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-[#f5f1ea]/90 p-4"
                >
                  <p className="text-lg font-bold text-zinc-900 sm:text-xl">{item.value}</p>
                  <p className="mt-1 text-sm text-zinc-600">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default HeroSection;





