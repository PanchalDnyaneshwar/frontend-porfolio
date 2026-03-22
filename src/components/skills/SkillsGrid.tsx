import SkillCategorySection from './SkillCategorySection';
import type { Skill } from '@/types/skill.types';

interface SkillsGridProps {
  groupedSkills: Record<string, Skill[]>;
}

function SkillsGrid({ groupedSkills }: SkillsGridProps) {
  return (
    <div className="space-y-6">
      {Object.entries(groupedSkills).map(([category, items]) => (
        <SkillCategorySection key={category} title={category} skills={items} />
      ))}
    </div>
  );
}

export default SkillsGrid;