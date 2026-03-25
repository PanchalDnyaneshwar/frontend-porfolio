import SkillCard from './SkillCard';
import type { Skill } from '@/types/skill.types';

interface SkillCategorySectionProps {
  title: string;
  skills: Skill[];
}

function SkillCategorySection({ title, skills }: SkillCategorySectionProps) {
  if (!skills.length) return null;

  return (
    <section className="rounded-3xl border border-neutral-200 bg-[#fffaf3] p-6 shadow-soft">
      <h3 className="text-2xl font-semibold text-zinc-900">{title}</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillCategorySection;


