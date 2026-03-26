import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/common/Container';
import { CONTACT_PAGE_TEXT } from '@/constants/contact';
import type { Profile } from '@/types/profile.types';

interface ContactHeroSectionProps {
  profile?: Profile | null;
}

function ContactHeroSection({ profile }: ContactHeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-hero-glow bg-cover">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <motion.div
          className="rounded-3xl border border-neutral-200 bg-[#fcfaf6]/95 p-8 shadow-soft backdrop-blur-sm md:p-10"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="display-kicker text-primary">
            Contact
            {profile?.fullName ? (
              <span className="mt-1 block text-sm font-normal normal-case tracking-normal text-zinc-600">
                {profile.fullName}
                {profile.title ? ` · ${profile.title}` : null}
              </span>
            ) : null}
          </p>
          <h1 className="display-title mt-4 text-4xl sm:text-5xl">{CONTACT_PAGE_TEXT.title}</h1>
          <p className="display-copy mt-5 max-w-3xl text-lg text-zinc-600">
            {CONTACT_PAGE_TEXT.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactHeroSection;
