import SkillCategoryCard from '@/components/about/SkillCategoryCard';
import type { Skill } from '@/types/skill.types';

interface SkillsGridProps {
  groupedSkills: Record<string, Skill[]>;
}

function SkillsGrid({ groupedSkills }: SkillsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Object.entries(groupedSkills).map(([category, items]) => (
        <SkillCategoryCard key={category} title={category} skills={items} />
      ))}
    </div>
  );
}

export default SkillsGrid;