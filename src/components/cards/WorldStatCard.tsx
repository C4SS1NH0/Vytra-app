import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { colorPalette, theme } from '@/src/theme';

type WorldStatCardProps = {
  label: string;
  value: string;
  helper: string;
};

export function WorldStatCard({ label, value, helper }: WorldStatCardProps) {
  return (
    <GlassCard style={styles.card}>
      <AppText tone="secondary" style={styles.label}>
        {label}
      </AppText>
      <AppText weight="bold" style={styles.value}>
        {value}
      </AppText>
      <View style={styles.line} />
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
  label: {
    fontSize: theme.typography.caption,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 28,
    lineHeight: 32,
  },
  line: {
    width: 40,
    height: 3,
    borderRadius: 999,
    backgroundColor: colorPalette.primary,
    opacity: 0.85,
  },
  helper: {
    lineHeight: 20,
  },
});
