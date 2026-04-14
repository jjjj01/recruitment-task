export const keys = {
  all: ["json"] as const,
  current: () => [...keys.all, "current"] as const,
  search: () => [...keys.current(), "search"] as const,
  import: () => [...keys.all, "import"] as const,
};
