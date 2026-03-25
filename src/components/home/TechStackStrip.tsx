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
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-neutral-200 bg-[#fcfaf6]/[0.72] p-5">
        {technologies.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-300 bg-[#f5f1ea]/90 px-4 py-2 text-sm text-zinc-700"
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}

export default TechStackStrip;




