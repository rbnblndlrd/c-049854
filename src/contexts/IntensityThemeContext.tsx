
import React, { createContext, useContext, ReactNode } from 'react';

interface IntensityThemeContextType {
  intensity: string;
  setIntensity: (intensity: string) => void;
}

const IntensityThemeContext = createContext<IntensityThemeContextType | undefined>(undefined);

export const IntensityThemeProvider = ({ children }: { children: ReactNode }) => {
  const [intensity, setIntensity] = React.useState('normal');

  return (
    <IntensityThemeContext.Provider value={{ intensity, setIntensity }}>
      {children}
    </IntensityThemeContext.Provider>
  );
};

export const useIntensityTheme = () => {
  const context = useContext(IntensityThemeContext);
  if (!context) {
    throw new Error('useIntensityTheme must be used within an IntensityThemeProvider');
  }
  return context;
};
