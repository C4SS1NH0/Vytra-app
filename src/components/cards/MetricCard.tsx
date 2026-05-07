import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { colorPalette, theme } from '@/src/theme';

type MetricCardProps = {
  label: string;
  value: string;
  helper: string;
  accent?: 'primary' | 'secondary' | 'accent' | 'info';
};

const accentMap = {
  primary: colorPalette.primary,
  secondary: colorPalette.secondary,
  accent: colorPalette.accent,
  info: colorPalette.info,
} as const;

export function MetricCard({
  label,
  value,
  helper,
  accent = 'primary',
}: MetricCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={[styles.glow, { backgroundColor: accentMap[accent] }]} />
      <AppText tone="secondary" style={styles.label}>
        {label}
      </AppText>
      <AppText weight="bold" style={styles.value}>
        {value}
      </AppText>
      <AppText tone="secondary" style={styles.helper}>
        {helper}
      </AppText>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '47%',
    gap: theme.spacing.xs,
  },
  glow: {
    width: 36,
    height: 4,
    borderRadius: 999,
    marginBottom: theme.spacing.xs,
    opacity: 0.9,
  },
  label: {
    fontSize: theme.typography.caption,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  value: {
    fontSize: 28,
    lineHeight: 32,
  },
  helper: {
    lineHeight: 20,
  },
});
