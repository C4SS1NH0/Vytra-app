import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/src/components/common/AppText';
import { colorPalette, theme } from '@/src/theme';

type ScreenContainerProps = PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

export function ScreenContainer({ children, title, subtitle }: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundGlowTop} />
      <View style={styles.backgroundGlowBottom} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <AppText style={styles.brand} tone="accent" weight="bold">
            VYTRA
          </AppText>
          <AppText style={styles.title} weight="bold">
            {title}
          </AppText>
          <AppText tone="secondary" style={styles.subtitle}>
            {subtitle}
          </AppText>
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colorPalette.background,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xxl,
    gap: theme.spacing.lg,
  },
  header: {
    gap: theme.spacing.xs,
  },
  brand: {
    letterSpacing: 3,
    fontSize: theme.typography.caption,
  },
  title: {
    fontSize: theme.typography.hero,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: theme.typography.bodyLarge,
    lineHeight: 22,
    maxWidth: 320,
  },
  backgroundGlowTop: {
    position: 'absolute',
    top: -80,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(0, 217, 255, 0.14)',
  },
  backgroundGlowBottom: {
    position: 'absolute',
    bottom: 80,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(124, 58, 237, 0.12)',
  },
});
