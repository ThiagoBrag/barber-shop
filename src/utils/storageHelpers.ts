// Use localStorage (persistent) rather than sessionStorage so the theme
// choice is remembered across browser sessions.
export function getSession<T>(key: string) {
  const jsonValue = window.localStorage.getItem(key);
  if (jsonValue != 'undefined' && jsonValue != null) {
    return JSON.parse(jsonValue) as T;
  }
  return null;
}

export function setSession<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function removeSession(key: string) {
  window.localStorage.removeItem(key);
}
