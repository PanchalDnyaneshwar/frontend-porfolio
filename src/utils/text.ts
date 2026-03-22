export const truncateText = (text: string, max = 120) => {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}...`;
};