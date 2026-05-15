import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { RunProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';
import { formatDurationMinutes, formatKm } from '@/src/utils/formatters';

type RunHistoryCardProps = {
  run: RunProps;
};

export function RunHistoryCard({ run }: RunHistoryCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <AppText weight="bold">{formatKm(run.distanceKm)}</AppText>
        <View style={styles.sparkBadge}>
          <AppText weight="bold" style={styles.sparkText}>
            +{run.sparksEarned} Sparks
          </AppText>
        </View>
      </View>
      <View style={styles.metaRow}>
        <AppText tone="secondary">{formatDurationMinutes(run.durationMinutes)}</AppText>
        <AppText tone="secondary">Pace {run.pace}</AppText>
      </View>
      <AppText tone="secondary">{new Date(run.date).toLocaleDateString('pt-BR')}</AppText>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  sparkBadge: {
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    backgroundColor: 'rgba(163, 255, 18, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(163, 255, 18, 0.24)',
  },
  sparkText: {
    color: colorPalette.accent,
    fontSize: theme.typography.caption,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
});
