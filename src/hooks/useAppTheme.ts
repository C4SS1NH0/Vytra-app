import { useColorScheme } from 'react-native';

import { theme } from '@/src/theme';

export function useAppTheme() {
  const colorScheme = useColorScheme();

  return {
    theme,
    colorScheme: colorScheme ?? 'dark',
    isDark: true,
  };
}
