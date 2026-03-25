import Badge from '@/components/common/Badge';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import type { Skill } from '@/types/skill.types';

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-[#f8efe4]/75 p-4 shadow-soft">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f6ede0]">
        {skill.icon ? (
          <ImageWithFallback
            src={skill.icon}
            alt={skill.name}
            className="h-8 w-8 object-contain"
            wrapperClassName="text-xs text-zinc-500"
            fallbackLabel={skill.name.slice(0, 2).toUpperCase()}
          />
        ) : (
          <span className="text-sm font-semibold text-zinc-600">
            {skill.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <p className="truncate text-base font-semibold text-zinc-900">{skill.name}</p>
        {skill.level ? (
          <div className="mt-2">
            <Badge>{skill.level}</Badge>
          </div>
        ) : (
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
            Skill
          </p>
        )}
      </div>
    </article>
  );
}

export default SkillCard;



