import Section from '@/components/common/Section';
import { CONTACT_PAGE_TEXT } from '@/constants/contact';

function ContactHeroSection() {
  return (
    <Section className="pb-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-soft md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          {CONTACT_PAGE_TEXT.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          {CONTACT_PAGE_TEXT.description}
        </p>
      </div>
    </Section>
  );
}

export default ContactHeroSection;