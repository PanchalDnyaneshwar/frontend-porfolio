import Button from '@/components/common/Button';
import Section from '@/components/common/Section';

function ContactCtaSection() {
  return (
    <Section>
      <div className="rounded-[2rem] border border-neutral-200 bg-gradient-to-r from-[#fffaf3] via-[#f9f1e6] to-[#f3e6d8] p-8 shadow-soft md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Let's Collaborate
        </p>
        <h2 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
          Ready to build something modern and reliable?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          I can help with portfolio websites, admin dashboards, full stack systems and polished responsive interfaces backed by clean architecture.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact">Start a Conversation</Button>
          <Button href="/projects" variant="outline">
            Explore Projects
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default ContactCtaSection;

