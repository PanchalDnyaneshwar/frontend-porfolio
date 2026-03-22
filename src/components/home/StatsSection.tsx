import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import StatCard from '@/components/common/StatCard';

function StatsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Highlights"
        title="Focused on quality, responsiveness and clean architecture"
        description="A portfolio should feel modern, fast and business-ready across all devices."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Frontend" value="React" description="Reusable and scalable UI" />
        <StatCard label="Backend" value="NestJS" description="Structured server architecture" />
        <StatCard label="Database" value="MongoDB" description="Flexible document storage" />
        <StatCard label="UI" value="Responsive" description="Optimized for all screens" />
      </div>
    </Section>
  );
}

export default StatsSection;