import tailwindConfig from "../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { useMediaQuery } from "react-responsive";

const twConfig = resolveConfig(tailwindConfig);

const breakpoints = twConfig.theme.screens;

type BreakpointKey = keyof typeof breakpoints;

export function useBreakpointScreen<K extends BreakpointKey>(breakpointKey: K) {
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });
  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
  type Key = `is${Capitalize<K>}`;
  return {
    [`is${capitalizedKey}`]: bool,
  } as Record<Key, boolean>;
}
