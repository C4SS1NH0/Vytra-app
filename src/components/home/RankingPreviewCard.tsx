import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { UserProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';
import { formatKm } from '@/src/utils/formatters';

type RankingPreviewCardProps = {
  users: UserProps[];
};

export function RankingPreviewCard({ users }: RankingPreviewCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View>
          <AppText tone="secondary" style={styles.eyebrow}>
            RANKING
          </AppText>
          <AppText weight="bold" style={styles.title}>
            Top 3 da semana
          </AppText>
        </View>
        <Pressable style={styles.cta}>
          <AppText weight="bold" style={styles.ctaText}>
            Ver completo
          </AppText>
        </Pressable>
      </View>

      <View style={styles.podium}>
        {users.map((user, index) => (
          <View key={user.id} style={styles.userCard}>
            <View style={[styles.rankBadge, index === 0 && styles.rankBadgeLead]}>
              <AppText weight="bold" style={[styles.rankText, index === 0 && styles.rankTextLead]}>
                #{index + 1}
              </AppText>
            </View>
            <AppText weight="bold" numberOfLines={1} style={styles.userName}>
              {user.name.split(' ')[0]}
            </AppText>
            <AppText tone="secondary" style={styles.userMeta}>
              {formatKm(user.totalKm)}
            </AppText>
          </View>
        ))}
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.lg,
    backgroundColor: 'rgba(16, 24, 39, 0.84)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 2.1,
  },
  title: {
    marginTop: theme.spacing.xs,
    fontSize: 22,
  },
  cta: {
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  ctaText: {
    color: colorPalette.primary,
    fontSize: 13,
  },
  podium: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  userCard: {
    flex: 1,
    minHeight: 132,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  rankBadge: {
    minWidth: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  rankBadgeLead: {
    backgroundColor: 'rgba(163, 255, 18, 0.14)',
    borderColor: 'rgba(163, 255, 18, 0.22)',
  },
  rankText: {
    fontSize: 13,
  },
  rankTextLead: {
    color: colorPalette.accent,
  },
  userName: {
    fontSize: 15,
  },
  userMeta: {
    fontSize: 12,
  },
});
