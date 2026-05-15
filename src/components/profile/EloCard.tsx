import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { EloProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

type EloCardProps = {
  elo: EloProps;
};

export function EloCard({ elo }: EloCardProps) {
  const progress = Math.min(100, Math.floor((elo.currentKm / elo.weeklyGoalKm) * 100));

  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View>
          <AppText tone="accent" weight="bold" style={styles.eyebrow}>
            ELO
          </AppText>
          <AppText weight="bold" style={styles.title}>
            {elo.partner.name}
          </AppText>
        </View>
        <View style={styles.streakBadge}>
          <AppText weight="bold" style={styles.streakText}>
            {elo.streakWeeks} semanas
          </AppText>
        </View>
      </View>
      <AppText tone="secondary" style={styles.summary}>
        {elo.summary}
      </AppText>
      <View style={styles.progressMeta}>
        <AppText weight="bold">
          {elo.currentKm}/{elo.weeklyGoalKm} km
        </AppText>
        <AppText tone="secondary">{progress}%</AppText>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>
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
  eyebrow: {
    fontSize: theme.typography.caption,
    letterSpacing: 2,
  },
  title: {
    fontSize: theme.typography.bodyLarge,
  },
  streakBadge: {
    alignSelf: 'flex-start',
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 8,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.28)',
  },
  streakText: {
    color: colorPalette.primary,
    fontSize: theme.typography.caption,
  },
  summary: {
    lineHeight: 21,
  },
  progressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  track: {
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colorPalette.primary,
  },
});
