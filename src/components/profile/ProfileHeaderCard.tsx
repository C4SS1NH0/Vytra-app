import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { UserProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

type ProfileHeaderCardProps = {
  user: UserProps;
};

export function ProfileHeaderCard({ user }: ProfileHeaderCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.avatar}>
          <AppText weight="bold" style={styles.avatarText}>
            {user.avatar}
          </AppText>
        </View>
        <View style={styles.identity}>
          <AppText weight="bold" style={styles.name}>
            {user.name}
          </AppText>
          <AppText tone="secondary">{user.username}</AppText>
          <AppText tone="secondary">
            {user.city}, {user.state}, {user.country}
          </AppText>
        </View>
      </View>
      <AppText tone="secondary" style={styles.bio}>
        {user.bio}
      </AppText>
      <View style={styles.counters}>
        <View style={styles.counter}>
          <AppText weight="bold" style={styles.counterValue}>
            {user.followers}
          </AppText>
          <AppText tone="secondary">Apoiadores</AppText>
        </View>
        <View style={styles.counter}>
          <AppText weight="bold" style={styles.counterValue}>
            {user.following}
          </AppText>
          <AppText tone="secondary">Apoiando</AppText>
        </View>
        <View style={styles.counter}>
          <AppText weight="bold" style={styles.counterValue}>
            {user.partners}
          </AppText>
          <AppText tone="secondary">Parceiros</AppText>
        </View>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.28)',
  },
  avatarText: {
    color: colorPalette.primary,
    fontSize: 20,
  },
  identity: {
    flex: 1,
    gap: 3,
  },
  name: {
    fontSize: 22,
  },
  bio: {
    lineHeight: 22,
  },
  counters: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  counter: {
    flex: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: colorPalette.border,
    gap: 4,
  },
  counterValue: {
    fontSize: theme.typography.bodyLarge,
  },
});
