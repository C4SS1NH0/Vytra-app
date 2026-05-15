import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { colorPalette, theme } from '@/src/theme';

type ConnectAppItem = {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
};

type ConnectAppsCardProps = {
  apps: ConnectAppItem[];
};

export function ConnectAppsCard({ apps }: ConnectAppsCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View>
          <AppText tone="secondary" style={styles.eyebrow}>
            CONEXOES
          </AppText>
          <AppText weight="bold" style={styles.title}>
            Conecte seu ritmo
          </AppText>
        </View>
      </View>

      <View style={styles.list}>
        {apps.map((app) => (
          <View key={app.id} style={styles.appRow}>
            <View style={styles.appMeta}>
              <View style={styles.badge}>
                <AppText weight="bold" style={styles.badgeText}>
                  {app.badge}
                </AppText>
              </View>
              <View style={styles.textBlock}>
                <AppText weight="bold">{app.name}</AppText>
                <AppText tone="secondary">{app.subtitle}</AppText>
              </View>
            </View>
            <Pressable style={styles.connectButton}>
              <FontAwesome color={colorPalette.primary} name="plus" size={12} />
              <AppText weight="bold" style={styles.connectLabel}>
                Conectar
              </AppText>
            </Pressable>
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
    gap: theme.spacing.xs,
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 2.1,
  },
  title: {
    fontSize: 22,
  },
  list: {
    gap: theme.spacing.sm,
  },
  appRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  appMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    flex: 1,
  },
  badge: {
    minWidth: 58,
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 9,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    color: colorPalette.info,
    letterSpacing: 1.1,
  },
  textBlock: {
    gap: 2,
    flex: 1,
  },
  connectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 217, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.18)',
  },
  connectLabel: {
    color: colorPalette.primary,
    fontSize: 13,
  },
});
