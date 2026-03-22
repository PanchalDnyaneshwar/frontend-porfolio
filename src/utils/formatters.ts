export const formatReadTime = (minutes?: number) => {
  if (!minutes) return '1 min read';
  return `${minutes} min read`;
};