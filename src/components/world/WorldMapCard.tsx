import { DimensionValue, Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { WorldPinProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

type PositionedWorldPin = WorldPinProps & {
  mapX: string;
  mapY: string;
};

type WorldMapCardProps = {
  pins: PositionedWorldPin[];
  selectedPinId?: string;
  onPinPress: (pin: PositionedWorldPin) => void;
};

export function WorldMapCard({ pins, selectedPinId, onPinPress }: WorldMapCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View>
          <AppText weight="bold" style={styles.title}>
            Holograma global
          </AppText>
          <AppText tone="secondary" style={styles.subtitle}>
            Mapa conceitual com localizacao aproximada da comunidade.
          </AppText>
        </View>
        <View style={styles.liveBadge}>
          <View style={styles.liveDot} />
          <AppText weight="bold" style={styles.liveText}>
            LIVE
          </AppText>
        </View>
      </View>

      <View style={styles.map}>
        <View style={styles.coreGlow} />
        <View style={styles.horizontalLine} />
        <View style={styles.verticalLine} />
        <View style={styles.ringLarge} />
        <View style={styles.ringMedium} />
        <View style={styles.ringSmall} />

        {pins.map((pin) => {
          const isSelected = pin.id === selectedPinId;

          return (
            <Pressable
              key={pin.id}
              onPress={() => onPinPress(pin)}
              style={[
                styles.pinWrapper,
                {
                  left: pin.mapX as DimensionValue,
                  top: pin.mapY as DimensionValue,
                },
              ]}>
              <View style={[styles.pinPulse, isSelected && styles.pinPulseSelected]} />
              <View style={[styles.pin, isSelected && styles.pinSelected]}>
                <AppText weight="bold" style={styles.pinLabel}>
                  {pin.user.avatar}
                </AppText>
              </View>
            </Pressable>
          );
        })}

        <View style={styles.footerHint}>
          <AppText tone="secondary" style={styles.footerText}>
            Toque em um pin para abrir o perfil aproximado do corredor.
          </AppText>
        </View>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  title: {
    fontSize: 22,
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    maxWidth: 240,
    lineHeight: 20,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.28)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: colorPalette.primary,
  },
  liveText: {
    color: colorPalette.primary,
    fontSize: theme.typography.caption,
    letterSpacing: 1,
  },
  map: {
    position: 'relative',
    height: 340,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    backgroundColor: 'rgba(5, 8, 22, 0.88)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  coreGlow: {
    position: 'absolute',
    top: '26%',
    left: '32%',
    width: 160,
    height: 160,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
  },
  horizontalLine: {
    position: 'absolute',
    top: '50%',
    left: 20,
    right: 20,
    height: 1,
    backgroundColor: 'rgba(0, 217, 255, 0.15)',
  },
  verticalLine: {
    position: 'absolute',
    top: 20,
    bottom: 20,
    left: '50%',
    width: 1,
    backgroundColor: 'rgba(124, 58, 237, 0.15)',
  },
  ringLarge: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.12)',
    top: 20,
    left: 18,
  },
  ringMedium: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.14)',
    top: 60,
    left: 58,
  },
  ringSmall: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(163, 255, 18, 0.18)',
    top: 100,
    left: 98,
  },
  pinWrapper: {
    position: 'absolute',
    marginLeft: -22,
    marginTop: -22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinPulse: {
    position: 'absolute',
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 217, 255, 0.16)',
  },
  pinPulseSelected: {
    backgroundColor: 'rgba(163, 255, 18, 0.22)',
    transform: [{ scale: 1.18 }],
  },
  pin: {
    width: 44,
    height: 44,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorPalette.surface,
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.4)',
  },
  pinSelected: {
    borderColor: 'rgba(163, 255, 18, 0.5)',
    backgroundColor: 'rgba(21, 31, 50, 0.98)',
  },
  pinLabel: {
    fontSize: theme.typography.caption,
    color: colorPalette.textPrimary,
  },
  footerHint: {
    position: 'absolute',
    left: theme.spacing.md,
    right: theme.spacing.md,
    bottom: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: 'rgba(16, 24, 39, 0.76)',
    borderWidth: 1,
    borderColor: colorPalette.border,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  footerText: {
    lineHeight: 18,
  },
});
