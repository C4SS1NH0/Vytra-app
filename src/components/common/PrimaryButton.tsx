import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { colorPalette, theme } from '@/src/theme';

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
};

export function PrimaryButton({
  label,
  onPress,
  variant = 'primary',
  style,
}: PrimaryButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.secondary,
        pressed && styles.pressed,
        style,
      ]}>
      <AppText
        weight="bold"
        style={[styles.label, { color: isPrimary ? colorPalette.background : colorPalette.textPrimary }]}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: colorPalette.primary,
    borderColor: 'rgba(0, 217, 255, 0.32)',
  },
  secondary: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderColor: colorPalette.borderStrong,
  },
  label: {
    fontSize: theme.typography.body,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
});
