export const formatDate = (date?: string | Date) => {
  if (!date) return '';

  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};