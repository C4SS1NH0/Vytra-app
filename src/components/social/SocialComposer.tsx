import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { colorPalette, theme } from '@/src/theme';

type SocialComposerProps = {
  avatar: string;
};

export function SocialComposer({ avatar }: SocialComposerProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <AppText weight="bold" style={styles.avatarText}>
            {avatar}
          </AppText>
        </View>
        <Pressable style={styles.inputShell}>
          <AppText tone="secondary">Compartilhe com a comunidade</AppText>
        </Pressable>
      </View>
      <View style={styles.actions}>
        <View style={styles.quickAction}>
          <FontAwesome color={colorPalette.primary} name="map-marker" size={14} />
          <AppText tone="secondary" style={styles.quickLabel}>
            Corrida
          </AppText>
        </View>
        <View style={styles.quickAction}>
          <FontAwesome color={colorPalette.accent} name="camera" size={14} />
          <AppText tone="secondary" style={styles.quickLabel}>
            Foto
          </AppText>
        </View>
        <View style={styles.quickAction}>
          <FontAwesome color={colorPalette.secondary} name="trophy" size={14} />
          <AppText tone="secondary" style={styles.quickLabel}>
            Conquista
          </AppText>
        </View>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.28)',
  },
  avatarText: {
    color: colorPalette.primary,
  },
  inputShell: {
    flex: 1,
    minHeight: 48,
    borderRadius: theme.radius.md,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.md,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  quickAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  quickLabel: {
    fontSize: theme.typography.caption,
  },
});
