import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ResponsiveContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

type ResponsiveProviderProps = {
  children: ReactNode;
};

const ResponsiveProvider = ({ children }: ResponsiveProviderProps) => {
  const [screen, setScreen] = useState({ isMobile: false, isTablet: false, isDesktop: true });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreen({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={screen}>
      {children}
    </ResponsiveContext.Provider>
  );
};

const useResponsive = (): ResponsiveContextType => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within ResponsiveProvider");
  }
  return context;
};

export { ResponsiveProvider, useResponsive };
