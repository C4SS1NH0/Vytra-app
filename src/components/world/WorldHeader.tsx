import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { colorPalette, theme } from '@/src/theme';

export function WorldHeader() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleRow}>
          <AppText weight="bold" style={styles.titlePrimary}>
            VYTRA
          </AppText>
          <AppText weight="bold" style={styles.titleAccent}>
            WORLD
          </AppText>
        </View>
        <AppText tone="secondary" style={styles.subtitle}>
          Corra com o mundo
        </AppText>
      </View>

      <Pressable accessibilityRole="button" style={styles.helpButton}>
        <FontAwesome color={colorPalette.primary} name="question" size={15} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xs,
    alignItems: 'baseline',
  },
  titlePrimary: {
    fontSize: 32,
    letterSpacing: 1.4,
  },
  titleAccent: {
    fontSize: 32,
    letterSpacing: 1.4,
    color: colorPalette.primary,
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    fontSize: theme.typography.bodyLarge,
  },
  helpButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(16, 24, 39, 0.92)',
    borderWidth: 1,
    borderColor: colorPalette.border,
    shadowColor: colorPalette.primary,
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
});
