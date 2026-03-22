import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import Badge from '@/components/common/Badge';
import EmptyState from '@/components/common/EmptyState';
import type { Skill } from '@/types/skill.types';

interface SkillsPreviewSectionProps {
  skills: Skill[];
}

function SkillsPreviewSection({ skills }: SkillsPreviewSectionProps) {
  return (
    <Section>
      <SectionHeading
        eyebrow="Skills"
        title="Core Technologies"
        description="A practical stack focused on frontend, backend, database and modern development workflow."
      />

      {skills.length ? (
        <>
          <div className="flex flex-wrap gap-3">
            {skills.slice(0, 16).map((skill) => (
              <Badge key={skill._id}>{skill.name}</Badge>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/skills" variant="outline">
              View All Skills
            </Button>
          </div>
        </>
      ) : (
        <EmptyState
          title="No skills found"
          description="Skills preview will appear here after adding active skills."
        />
      )}
    </Section>
  );
}

export default SkillsPreviewSection;