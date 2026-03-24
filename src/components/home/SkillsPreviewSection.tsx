import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import EmptyState from '@/components/common/EmptyState';
import type { Skill } from '@/types/skill.types';

interface SkillsPreviewSectionProps {
  skills: Skill[];
}

function SkillsPreviewSection({ skills }: SkillsPreviewSectionProps) {
  const previewSkills = skills.slice(0, 12);

  return (
    <Section>
      {skills.length ? (
        <div className="xl:grid xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-10">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              eyebrow="Skills"
              title="Core Technologies"
              description="A practical stack focused on frontend, backend, database and modern development workflow."
            />

            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                What this covers
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The section now makes better use of wide screens by turning the old empty side area
                into a proper intro rail, while the right side carries a cleaner skill preview grid.
              </p>
            </div>

            <div className="mt-8 hidden xl:block">
              <Button href="/skills" variant="outline">
                View All Skills
              </Button>
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {previewSkills.map((skill) => (
                <article
                  key={skill._id}
                  className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <p className="text-lg font-semibold text-white">{skill.name}</p>
                  <p className="mt-2 text-sm text-primary">{skill.category}</p>
                  {skill.level ? (
                    <p className="mt-3 text-sm leading-6 text-slate-400">{skill.level}</p>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Production-ready experience applied across frontend, backend, database, and
                      deployment-focused project work.
                    </p>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-8 xl:hidden">
              <Button href="/skills" variant="outline">
                View All Skills
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="xl:grid xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-10">
          <SectionHeading
            eyebrow="Skills"
            title="Core Technologies"
            description="A practical stack focused on frontend, backend, database and modern development workflow."
          />
          <EmptyState
            title="No skills found"
            description="Skills preview will appear here after adding active skills."
          />
        </div>
      )}
    </Section>
  );
}

export default SkillsPreviewSection;
