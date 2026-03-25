import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import type { ProjectFilterState } from '@/types/project.types';

interface ProjectFilterBarProps {
  filters: ProjectFilterState;
  categories: string[];
  onChange: (next: ProjectFilterState) => void;
}

function ProjectFilterBar({
  filters,
  categories,
  onChange,
}: ProjectFilterBarProps) {
  return (
    <div className="mb-8 rounded-[2rem] border border-neutral-200 bg-[#fff9f2] p-5 shadow-soft sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
          Filter projects
        </p>
        <p className="mt-2 text-sm text-zinc-600">
          Narrow the project list by keyword or category.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
      <Input
        label="Search"
        placeholder="Search projects..."
        value={filters.search}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
      />

      <Select
        label="Category"
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      </div>
    </div>
  );
}

export default ProjectFilterBar;




