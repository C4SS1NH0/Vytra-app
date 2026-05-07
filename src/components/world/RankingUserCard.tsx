import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { WorldRankingEntry } from '@/src/screens/World/types';
import { colorPalette, theme } from '@/src/theme';

type RankingUserCardProps = {
  rank: number;
  user: WorldRankingEntry;
};

export function RankingUserCard({ rank, user }: RankingUserCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.left}>
        <View style={styles.rankBadge}>
          <AppText weight="bold" style={styles.rankText}>
            #{rank}
          </AppText>
        </View>
        <View style={styles.avatar}>
          <AppText weight="bold" style={styles.avatarLabel}>
            {user.avatar}
          </AppText>
        </View>
        <View style={styles.identity}>
          <AppText weight="bold" numberOfLines={1} style={styles.name}>
            {user.name}
          </AppText>
          <AppText tone="secondary">{user.weeklyRuns} corridas na semana</AppText>
          <AppText style={styles.sparks}>{user.sparks} Sparks</AppText>
        </View>
      </View>

      <View style={styles.right}>
        <AppText weight="bold" style={styles.kmValue}>
          {user.totalKm.toFixed(1)} km
        </AppText>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: 'rgba(21, 31, 50, 0.82)',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    flex: 1,
  },
  rankBadge: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  rankText: {
    fontSize: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(124, 58, 237, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.26)',
  },
  avatarLabel: {
    color: '#DDD6FE',
  },
  identity: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: theme.typography.bodyLarge,
  },
  sparks: {
    color: '#C4B5FD',
    fontSize: 12,
  },
  right: {
    alignItems: 'flex-end',
  },
  kmValue: {
    fontSize: 18,
  },
});
