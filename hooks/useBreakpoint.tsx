"use client";
import { useMediaQuery } from "react-responsive";

const useBreakpoint = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  const isMobileLarge = useMediaQuery({ minWidth: 577, maxWidth: 767 });

  const isMobile = useMediaQuery({ maxWidth: 576 });

  const isMobileLargeDown = useMediaQuery({ maxWidth: 767 });

  const isDesktopDown = useMediaQuery({ maxWidth: 1200 });

  return {
    isDesktop,
    isTablet,
    isMobile,
    isMobileLarge,
    isMobileLargeDown,
    isDesktopDown,
  };
};

export default useBreakpoint;
