import React from 'react';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = React.useState(null);

  return (
    <ThemeContext.Provider value={{ theme, change }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
