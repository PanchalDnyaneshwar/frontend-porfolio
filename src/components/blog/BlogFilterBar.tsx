import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import type { BlogFilterState } from '@/types/blog.types';

interface BlogFilterBarProps {
  filters: BlogFilterState;
  categories: string[];
  onChange: (next: BlogFilterState) => void;
}

function BlogFilterBar({ filters, categories, onChange }: BlogFilterBarProps) {
  return (
    <div className="mb-8 rounded-[2rem] border border-neutral-200 bg-[#fcfaf6] p-5 shadow-soft sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
          Filter articles
        </p>
        <p className="mt-2 text-sm text-zinc-600">
          Search by title or narrow the list by category.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
      <Input
        label="Search"
        placeholder="Search blogs..."
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

export default BlogFilterBar;





