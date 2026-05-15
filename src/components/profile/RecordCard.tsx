import { StyleSheet } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { theme } from '@/src/theme';

type RecordCardProps = {
  label: string;
  value: string;
  helper: string;
};

export function RecordCard({ label, value, helper }: RecordCardProps) {
  return (
    <GlassCard style={styles.card}>
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
    gap: theme.spacing.xs,
  },
  label: {
    fontSize: theme.typography.caption,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  value: {
    fontSize: 24,
  },
  helper: {
    lineHeight: 20,
  },
});
