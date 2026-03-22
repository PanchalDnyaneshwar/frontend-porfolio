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
    <div className="mb-8 grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-5 md:grid-cols-2">
      <Input
        placeholder="Search blogs..."
        value={filters.search}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
      />

      <Select
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
  );
}

export default BlogFilterBar;