
export const setItem = (name, data) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(name, JSON.stringify(data));
};

export const getItem = (name) => {
  if (typeof window === "undefined") return null;
  const item = localStorage.getItem(name);
  return item ? JSON.parse(item) : null;
};