import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { ChallengeProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

type ChallengeCardProps = {
  challenge: ChallengeProps;
};

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  const progress = Math.min(100, Math.floor((challenge.currentKm / challenge.goalKm) * 100));

  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View style={styles.statusPill}>
          <AppText weight="bold" style={styles.statusText}>
            Ativo
          </AppText>
        </View>
        <AppText tone="secondary">{challenge.participants} atletas</AppText>
      </View>
      <AppText weight="bold" style={styles.title}>
        {challenge.title}
      </AppText>
      <AppText tone="secondary" style={styles.description}>
        {challenge.description}
      </AppText>
      <View style={styles.progressMeta}>
        <AppText weight="bold">
          {challenge.currentKm}/{challenge.goalKm} km
        </AppText>
        <AppText tone="secondary">{progress}%</AppText>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  statusPill: {
    borderRadius: theme.radius.pill,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.28)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
  },
  statusText: {
    color: colorPalette.primary,
    fontSize: theme.typography.caption,
    letterSpacing: 1,
  },
  title: {
    fontSize: theme.typography.bodyLarge,
  },
  description: {
    lineHeight: 21,
  },
  progressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  progressTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colorPalette.accent,
  },
});
