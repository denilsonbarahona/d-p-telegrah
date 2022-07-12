export const getSession = (key) => {
  const session = sessionStorage.getItem(key);
  return JSON.parse(session);
};

export const setSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
