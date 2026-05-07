import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { WorldPin } from '@/src/components/world/WorldPin';
import { WorldGlobePin } from '@/src/screens/World/types';
import { colorPalette, theme } from '@/src/theme';

type HologramGlobeProps = {
  pins: WorldGlobePin[];
  selectedPinId?: string;
  onPinPress: (pin: WorldGlobePin) => void;
};

export function HologramGlobe({ pins, selectedPinId, onPinPress }: HologramGlobeProps) {
  return (
    <View style={styles.shell}>
      <View style={styles.header}>
        <View style={styles.livePill}>
          <View style={styles.liveDot} />
          <AppText weight="bold" style={styles.liveLabel}>
            GLOBAL LIVE
          </AppText>
        </View>
        <View style={styles.usersPill}>
          <FontAwesome color={colorPalette.textSecondary} name="users" size={12} />
          <AppText tone="secondary" style={styles.usersLabel}>
            Rede ativa
          </AppText>
        </View>
      </View>

      <View style={styles.globeArea}>
        <View style={styles.globeCore}>
          <View style={styles.glowLarge} />
          <View style={styles.glowMedium} />
          <View style={styles.ringOuter} />
          <View style={styles.ringMiddle} />
          <View style={styles.ringInner} />
          <View style={styles.latitudeTop} />
          <View style={styles.latitudeMiddle} />
          <View style={styles.latitudeBottom} />
          <View style={styles.longitudeLeft} />
          <View style={styles.longitudeCenter} />
          <View style={styles.longitudeRight} />
          <View style={[styles.continent, styles.continentOne]} />
          <View style={[styles.continent, styles.continentTwo]} />
          <View style={[styles.continent, styles.continentThree]} />
          <View style={[styles.scanLine, styles.scanLineOne]} />
          <View style={[styles.scanLine, styles.scanLineTwo]} />
          <View style={[styles.scanLine, styles.scanLineThree]} />
          <View style={[styles.orbitDot, styles.orbitDotOne]} />
          <View style={[styles.orbitDot, styles.orbitDotTwo]} />
          <View style={[styles.orbitDot, styles.orbitDotThree]} />

          {pins.map((pin) => (
            <WorldPin
              key={pin.id}
              onPress={onPinPress}
              pin={pin}
              selected={pin.id === selectedPinId}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    borderRadius: 32,
    overflow: 'hidden',
    padding: theme.spacing.lg,
    paddingBottom: 88,
    backgroundColor: 'rgba(10, 14, 28, 0.96)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  livePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 7,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.22)',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: colorPalette.primary,
  },
  liveLabel: {
    fontSize: 11,
    color: colorPalette.primary,
    letterSpacing: 1,
  },
  usersPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 7,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  usersLabel: {
    fontSize: 11,
  },
  globeArea: {
    alignItems: 'center',
    marginTop: theme.spacing.xl,
  },
  globeCore: {
    position: 'relative',
    width: '100%',
    height: 290,
    borderRadius: 240,
    overflow: 'hidden',
    backgroundColor: 'rgba(4, 8, 20, 0.82)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.12)',
  },
  glowLarge: {
    position: 'absolute',
    top: 16,
    left: '20%',
    width: '60%',
    height: 260,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
  },
  glowMedium: {
    position: 'absolute',
    top: 54,
    left: '32%',
    width: '36%',
    height: 180,
    borderRadius: 999,
    backgroundColor: 'rgba(124, 58, 237, 0.14)',
  },
  ringOuter: {
    position: 'absolute',
    top: 8,
    left: '9%',
    width: '82%',
    height: 272,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.18)',
  },
  ringMiddle: {
    position: 'absolute',
    top: 34,
    left: '16%',
    width: '68%',
    height: 224,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  ringInner: {
    position: 'absolute',
    top: 66,
    left: '25%',
    width: '50%',
    height: 158,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.2)',
  },
  latitudeTop: {
    position: 'absolute',
    top: 64,
    left: '17%',
    width: '66%',
    height: 1,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
  },
  latitudeMiddle: {
    position: 'absolute',
    top: 145,
    left: '8%',
    width: '84%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  latitudeBottom: {
    position: 'absolute',
    top: 226,
    left: '17%',
    width: '66%',
    height: 1,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
  },
  longitudeLeft: {
    position: 'absolute',
    top: 24,
    left: '31%',
    width: 1,
    height: 242,
    backgroundColor: 'rgba(124, 58, 237, 0.14)',
  },
  longitudeCenter: {
    position: 'absolute',
    top: 16,
    left: '50%',
    width: 1,
    height: 258,
    backgroundColor: 'rgba(0, 217, 255, 0.16)',
  },
  longitudeRight: {
    position: 'absolute',
    top: 24,
    left: '69%',
    width: 1,
    height: 242,
    backgroundColor: 'rgba(124, 58, 237, 0.14)',
  },
  continent: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 217, 255, 0.09)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.12)',
  },
  continentOne: {
    top: 84,
    left: '22%',
    width: 88,
    height: 58,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 42,
    transform: [{ rotate: '-10deg' }],
  },
  continentTwo: {
    top: 106,
    left: '50%',
    width: 78,
    height: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 24,
    transform: [{ rotate: '8deg' }],
  },
  continentThree: {
    top: 164,
    left: '40%',
    width: 64,
    height: 42,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 24,
    transform: [{ rotate: '-12deg' }],
  },
  scanLine: {
    position: 'absolute',
    left: 24,
    right: 24,
    height: 2,
    backgroundColor: 'rgba(0, 217, 255, 0.06)',
  },
  scanLineOne: {
    top: 92,
  },
  scanLineTwo: {
    top: 154,
  },
  scanLineThree: {
    top: 212,
  },
  orbitDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: colorPalette.accent,
  },
  orbitDotOne: {
    top: 72,
    left: '74%',
  },
  orbitDotTwo: {
    top: 152,
    left: '18%',
  },
  orbitDotThree: {
    top: 236,
    left: '64%',
  },
});
