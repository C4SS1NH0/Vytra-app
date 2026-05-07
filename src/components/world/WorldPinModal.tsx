import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { PrimaryButton } from '@/src/components/common/PrimaryButton';
import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { WorldPinProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';
import { formatKm } from '@/src/utils/formatters';

type WorldPinModalProps = {
  visible: boolean;
  pin: WorldPinProps | null;
  safeLocation?: string;
  onClose: () => void;
};

export function WorldPinModal({ visible, pin, safeLocation, onClose }: WorldPinModalProps) {
  if (!pin) {
    return null;
  }

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <GlassCard style={styles.sheet}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <View style={styles.avatar}>
              <AppText weight="bold" style={styles.avatarText}>
                {pin.user.avatar}
              </AppText>
            </View>
            <View style={styles.identity}>
              <AppText weight="bold" style={styles.name}>
                {pin.user.name}
              </AppText>
              <AppText tone="secondary">{pin.user.username}</AppText>
              <AppText tone="secondary">{safeLocation}</AppText>
            </View>
          </View>

          <View style={styles.metrics}>
            <View style={styles.metricBox}>
              <AppText tone="secondary" style={styles.metricLabel}>
                Semana
              </AppText>
              <AppText weight="bold" style={styles.metricValue}>
                {formatKm(pin.totalKm)}
              </AppText>
            </View>
            <View style={styles.metricBox}>
              <AppText tone="secondary" style={styles.metricLabel}>
                Sparks
              </AppText>
              <AppText weight="bold" style={styles.metricValue}>
                {pin.sparks}
              </AppText>
            </View>
          </View>

          <View style={styles.actions}>
            <PrimaryButton label="Seguir" variant="primary" />
            <PrimaryButton label="Ver perfil" variant="secondary" />
          </View>
        </GlassCard>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(3, 7, 18, 0.6)',
    padding: theme.spacing.lg,
  },
  sheet: {
    gap: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    backgroundColor: 'rgba(16, 24, 39, 0.96)',
  },
  handle: {
    alignSelf: 'center',
    width: 52,
    height: 4,
    borderRadius: 999,
    backgroundColor: colorPalette.borderStrong,
  },
  header: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.28)',
  },
  avatarText: {
    fontSize: theme.typography.bodyLarge,
    color: colorPalette.primary,
  },
  identity: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 20,
  },
  metrics: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  metricBox: {
    flex: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: colorPalette.border,
    backgroundColor: 'rgba(255,255,255,0.03)',
    gap: theme.spacing.xs,
  },
  metricLabel: {
    fontSize: theme.typography.caption,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  metricValue: {
    fontSize: 22,
  },
  actions: {
    gap: theme.spacing.sm,
  },
});
