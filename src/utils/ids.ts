export const createId = (): string => {
  const random = Math.random().toString(16).slice(2, 8);
  return `${Date.now().toString(16)}-${random}`;
};
