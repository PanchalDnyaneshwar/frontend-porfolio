import Badge from '@/components/common/Badge';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import type { Skill } from '@/types/skill.types';

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-4 shadow-soft">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-900">
        {skill.icon ? (
          <ImageWithFallback
            src={skill.icon}
            alt={skill.name}
            className="h-8 w-8 object-contain"
            wrapperClassName="text-xs text-slate-500"
            fallbackLabel={skill.name.slice(0, 2).toUpperCase()}
          />
        ) : (
          <span className="text-sm font-semibold text-slate-400">
            {skill.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <p className="truncate text-base font-semibold text-white">{skill.name}</p>
        {skill.level ? (
          <div className="mt-2">
            <Badge>{skill.level}</Badge>
          </div>
        ) : (
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
            Skill
          </p>
        )}
      </div>
    </article>
  );
}

export default SkillCard;
