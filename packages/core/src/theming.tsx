import { createTheming } from "@callstack/react-theme-provider";
import DefaultTheme from "./styles/DefaultTheme";
import type { Theme } from "@kali/types";

export const { ThemeProvider, withTheme, useTheme } =
  createTheming<Theme>(DefaultTheme);
