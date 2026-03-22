import Badge from '@/components/common/Badge';
import type { Skill } from '@/types/skill.types';

interface SkillCategoryCardProps {
  title: string;
  skills: Skill[];
}

function SkillCategoryCard({ title, skills }: SkillCategoryCardProps) {
  if (!skills.length) return null;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill._id}>{skill.name}</Badge>
        ))}
      </div>
    </div>
  );
}

export default SkillCategoryCard;