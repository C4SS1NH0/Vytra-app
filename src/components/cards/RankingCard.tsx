import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { UserProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';
import { formatKm } from '@/src/utils/formatters';

type RankingCardProps = {
  users: UserProps[];
};

export function RankingCard({ users }: RankingCardProps) {
  return (
    <GlassCard style={styles.card}>
      {users.map((user, index) => (
        <View key={user.id} style={[styles.row, index < users.length - 1 && styles.rowBorder]}>
          <View style={styles.left}>
            <View style={[styles.rankBadge, index === 0 && styles.rankBadgeLead]}>
              <AppText weight="bold" style={[styles.rankText, index === 0 && styles.rankTextLead]}>
                #{index + 1}
              </AppText>
            </View>
            <View style={styles.identity}>
              <AppText weight="bold">{user.name}</AppText>
              <AppText tone="secondary">
                {user.city}, {user.state}
              </AppText>
            </View>
          </View>
          <View style={styles.right}>
            <AppText weight="bold" style={styles.kmValue}>
              {formatKm(user.totalKm)}
            </AppText>
            <AppText tone="secondary">{user.sparks} Sparks</AppText>
          </View>
        </View>
      ))}
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: theme.spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colorPalette.border,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    flex: 1,
  },
  identity: {
    gap: 2,
    flex: 1,
  },
  rankBadge: {
    minWidth: 44,
    height: 44,
    borderRadius: theme.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  rankBadgeLead: {
    backgroundColor: 'rgba(163, 255, 18, 0.14)',
    borderColor: 'rgba(163, 255, 18, 0.26)',
  },
  rankText: {
    color: colorPalette.textPrimary,
  },
  rankTextLead: {
    color: colorPalette.accent,
  },
  right: {
    alignItems: 'flex-end',
    gap: 2,
  },
  kmValue: {
    fontSize: theme.typography.bodyLarge,
  },
});
