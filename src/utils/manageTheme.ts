export const manageTheme = (isDarkTheme: boolean) => {
  if (isDarkTheme) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
