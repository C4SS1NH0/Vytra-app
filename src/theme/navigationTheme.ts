import { DarkTheme, Theme } from '@react-navigation/native';

import { colorPalette } from '@/src/theme/colors';

export const navigationTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colorPalette.background,
    card: colorPalette.surface,
    border: colorPalette.border,
    notification: colorPalette.accent,
    primary: colorPalette.primary,
    text: colorPalette.textPrimary,
  },
};
