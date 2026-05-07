import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { WorldRankingEntry } from '@/src/screens/World/types';
import { colorPalette, theme } from '@/src/theme';

type RankingPodiumProps = {
  users: WorldRankingEntry[];
};

function PodiumCard({
  user,
  place,
  featured = false,
}: {
  user: WorldRankingEntry;
  place: number;
  featured?: boolean;
}) {
  return (
    <GlassCard style={[styles.card, featured ? styles.cardFeatured : styles.cardSide]}>
      <View style={[styles.rankBadge, featured ? styles.rankBadgeFeatured : styles.rankBadgeSide]}>
        <AppText weight="bold" style={[styles.rankText, featured ? styles.rankTextFeatured : styles.rankTextSide]}>
          #{place}
        </AppText>
      </View>
      <View style={[styles.avatar, featured ? styles.avatarFeatured : styles.avatarSide]}>
        <AppText weight="bold" style={[styles.avatarLabel, featured ? styles.avatarLabelFeatured : styles.avatarLabelSide]}>
          {user.avatar}
        </AppText>
      </View>
      <AppText weight="bold" numberOfLines={1} style={styles.name}>
        {user.name}
      </AppText>
      <AppText style={[styles.kmValue, featured ? styles.kmValueFeatured : styles.kmValueSide]} weight="bold">
        {user.totalKm.toFixed(1)} km
      </AppText>
      <AppText tone="secondary" style={styles.sparkValue}>
        {user.sparks} Sparks
      </AppText>
    </GlassCard>
  );
}

export function RankingPodium({ users }: RankingPodiumProps) {
  if (users.length < 3) {
    return null;
  }

  return (
    <View style={styles.row}>
      <View style={styles.sideWrap}>
        <PodiumCard place={2} user={users[1]} />
      </View>
      <View style={styles.centerWrap}>
        <PodiumCard featured place={1} user={users[0]} />
      </View>
      <View style={styles.sideWrap}>
        <PodiumCard place={3} user={users[2]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: theme.spacing.sm,
  },
  sideWrap: {
    flex: 1,
  },
  centerWrap: {
    flex: 1.08,
  },
  card: {
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
  },
  cardSide: {
    minHeight: 188,
    paddingTop: theme.spacing.md,
    backgroundColor: 'rgba(21, 31, 50, 0.9)',
    borderColor: 'rgba(124, 58, 237, 0.24)',
  },
  cardFeatured: {
    minHeight: 220,
    paddingTop: theme.spacing.lg,
    backgroundColor: 'rgba(12, 24, 39, 0.95)',
    borderColor: 'rgba(0, 217, 255, 0.32)',
    shadowColor: colorPalette.primary,
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  rankBadge: {
    minWidth: 44,
    height: 28,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankBadgeSide: {
    backgroundColor: 'rgba(124, 58, 237, 0.14)',
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.28)',
  },
  rankBadgeFeatured: {
    backgroundColor: 'rgba(0, 217, 255, 0.14)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.28)',
  },
  rankText: {
    fontSize: 12,
  },
  rankTextSide: {
    color: '#C4B5FD',
  },
  rankTextFeatured: {
    color: colorPalette.primary,
  },
  avatar: {
    marginTop: theme.spacing.md,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  avatarSide: {
    width: 58,
    height: 58,
    borderColor: 'rgba(124, 58, 237, 0.34)',
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
  },
  avatarFeatured: {
    width: 72,
    height: 72,
    borderColor: 'rgba(0, 217, 255, 0.4)',
    backgroundColor: 'rgba(0, 217, 255, 0.1)',
  },
  avatarLabel: {
    fontSize: theme.typography.bodyLarge,
  },
  avatarLabelSide: {
    color: '#DDD6FE',
  },
  avatarLabelFeatured: {
    color: colorPalette.primary,
  },
  name: {
    marginTop: theme.spacing.md,
    fontSize: theme.typography.bodyLarge,
  },
  kmValue: {
    marginTop: theme.spacing.xs,
    color: colorPalette.textPrimary,
  },
  kmValueSide: {
    fontSize: 20,
  },
  kmValueFeatured: {
    fontSize: 24,
  },
  sparkValue: {
    marginTop: 4,
    fontSize: 12,
  },
});
