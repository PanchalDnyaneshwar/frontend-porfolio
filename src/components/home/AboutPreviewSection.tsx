import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import type { Profile } from '@/types/profile.types';

interface AboutPreviewSectionProps {
  profile?: Profile | null;
}

function AboutPreviewSection({ profile }: AboutPreviewSectionProps) {
  return (
    <section className="section-space">
      <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft">
          <SectionHeading eyebrow="About Me" title="Who I Am" />
          <p className="text-base leading-8 text-slate-400">
            {profile?.longBio ||
              profile?.shortBio ||
              'I am a passionate developer focused on building real-world applications with elegant UI, clean code structure and reliable backend integration.'}
          </p>

          <div className="mt-6">
            <Button href="/about" variant="outline">
              Read More
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Location</p>
            <p className="mt-3 text-lg font-semibold text-white">
              {profile?.location || 'India'}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Email</p>
            <p className="mt-3 break-all text-lg font-semibold text-white">
              {profile?.email || 'your@email.com'}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:col-span-2">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">What I Build</p>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              Portfolio websites, admin dashboards, CRUD systems, business apps and scalable full stack platforms with clean user experience and maintainable architecture.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreviewSection;