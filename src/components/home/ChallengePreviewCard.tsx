import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { ChallengeProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

type ChallengePreviewCardProps = {
  challenge: ChallengeProps;
};

export function ChallengePreviewCard({ challenge }: ChallengePreviewCardProps) {
  const progress = Math.min(100, Math.floor((challenge.currentKm / challenge.goalKm) * 100));

  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View>
          <AppText tone="accent" weight="bold" style={styles.eyebrow}>
            DESAFIO
          </AppText>
          <AppText weight="bold" style={styles.title}>
            {challenge.title}
          </AppText>
        </View>
        <View style={styles.progressChip}>
          <AppText weight="bold" style={styles.progressChipText}>
            {progress}%
          </AppText>
        </View>
      </View>

      <AppText tone="secondary" style={styles.description}>
        {challenge.description}
      </AppText>

      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <FontAwesome color={colorPalette.textSecondary} name="flag-checkered" size={13} />
          <AppText tone="secondary">
            {challenge.currentKm}/{challenge.goalKm} km
          </AppText>
        </View>
        <View style={styles.metaItem}>
          <FontAwesome color={colorPalette.textSecondary} name="users" size={13} />
          <AppText tone="secondary">{challenge.participants} atletas</AppText>
        </View>
      </View>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.md,
    backgroundColor: 'rgba(16, 24, 39, 0.84)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 2.1,
  },
  title: {
    marginTop: theme.spacing.xs,
    fontSize: 22,
  },
  progressChip: {
    alignSelf: 'flex-start',
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    backgroundColor: 'rgba(163, 255, 18, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(163, 255, 18, 0.18)',
  },
  progressChipText: {
    color: colorPalette.accent,
    fontSize: 13,
  },
  description: {
    lineHeight: 21,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  track: {
    height: 10,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.07)',
  },
  fill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colorPalette.accent,
  },
});
