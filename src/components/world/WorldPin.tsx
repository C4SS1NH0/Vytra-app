import { DimensionValue, Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { WorldGlobePin } from '@/src/screens/World/types';
import { colorPalette, theme } from '@/src/theme';

type WorldPinProps = {
  pin: WorldGlobePin;
  selected?: boolean;
  onPress: (pin: WorldGlobePin) => void;
};

const toneStyles = {
  primary: {
    borderColor: 'rgba(0, 217, 255, 0.92)',
    glowColor: 'rgba(0, 217, 255, 0.24)',
    textColor: colorPalette.primary,
  },
  secondary: {
    borderColor: 'rgba(124, 58, 237, 0.9)',
    glowColor: 'rgba(124, 58, 237, 0.24)',
    textColor: '#C4B5FD',
  },
} as const;

export function WorldPin({ pin, selected = false, onPress }: WorldPinProps) {
  const size = pin.isPrimary ? 58 : 46;
  const tone = toneStyles[pin.tone];

  return (
    <Pressable
      onPress={() => onPress(pin)}
      style={[
        styles.container,
        {
          left: pin.mapX as DimensionValue,
          top: pin.mapY as DimensionValue,
        },
      ]}>
      <View
        style={[
          styles.glow,
          {
            width: size + 18,
            height: size + 18,
            backgroundColor: tone.glowColor,
            transform: [{ scale: selected ? 1.16 : 1 }],
          },
        ]}
      />
      <View
        style={[
          styles.avatar,
          {
            width: size,
            height: size,
            borderColor: tone.borderColor,
          },
          pin.isPrimary && styles.avatarPrimary,
          selected && styles.avatarSelected,
        ]}>
        <AppText weight="bold" style={[styles.avatarLabel, { color: tone.textColor }]}>
          {pin.user.avatar}
        </AppText>
      </View>
      <View style={[styles.pointer, { borderTopColor: tone.borderColor }]} />
      {pin.badgeLabel ? (
        <View style={styles.badge}>
          <AppText weight="bold" style={styles.badgeLabel}>
            {pin.badgeLabel}
          </AppText>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginLeft: -29,
    marginTop: -29,
    alignItems: 'center',
  },
  glow: {
    position: 'absolute',
    borderRadius: 999,
    top: -9,
  },
  avatar: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(8, 15, 29, 0.94)',
    borderWidth: 2,
    shadowColor: colorPalette.primary,
    shadowOpacity: 0.26,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  avatarPrimary: {
    backgroundColor: 'rgba(11, 27, 42, 0.98)',
  },
  avatarSelected: {
    transform: [{ scale: 1.05 }],
  },
  avatarLabel: {
    fontSize: theme.typography.bodyLarge,
  },
  pointer: {
    marginTop: -2,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -12,
    minWidth: 34,
    paddingHorizontal: theme.spacing.xs,
    height: 20,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorPalette.primary,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.24)',
  },
  badgeLabel: {
    color: colorPalette.background,
    fontSize: 11,
  },
});
