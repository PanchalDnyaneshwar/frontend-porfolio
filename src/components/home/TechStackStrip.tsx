import Section from '@/components/common/Section';

const technologies = [
  'React.js',
  'TypeScript',
  'Tailwind CSS',
  'NestJS',
  'MongoDB',
  'REST API',
  'Responsive UI',
  'Clean Architecture',
];

function TechStackStrip() {
  return (
    <Section className="py-8">
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
        {technologies.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}

export default TechStackStrip;