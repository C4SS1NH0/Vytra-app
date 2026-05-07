import { colorPalette } from '@/src/theme/colors';

export const theme = {
  colors: colorPalette,
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  radius: {
    sm: 12,
    md: 18,
    lg: 24,
    pill: 999,
  },
  typography: {
    caption: 12,
    body: 14,
    bodyLarge: 16,
    title: 24,
    hero: 34,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
} as const;

export type AppTheme = typeof theme;
