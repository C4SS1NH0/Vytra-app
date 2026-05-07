import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { colorPalette, theme } from '@/src/theme';

type AppTextProps = TextProps & {
  children: ReactNode;
  tone?: 'primary' | 'secondary' | 'accent';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  style?: StyleProp<TextStyle>;
};

const fontWeightMap = StyleSheet.create({
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
});

const toneMap = {
  primary: colorPalette.textPrimary,
  secondary: colorPalette.textSecondary,
  accent: colorPalette.primary,
} as const;

export function AppText({
  children,
  tone = 'primary',
  weight = 'regular',
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      style={[
        styles.base,
        { color: toneMap[tone], fontSize: theme.typography.body },
        fontWeightMap[weight],
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
