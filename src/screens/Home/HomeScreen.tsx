import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChallengePreviewCard } from '@/src/components/home/ChallengePreviewCard';
import { ConnectAppsCard } from '@/src/components/home/ConnectAppsCard';
import { FeaturedEventCard } from '@/src/components/home/FeaturedEventCard';
import { HomeHeader } from '@/src/components/home/HomeHeader';
import { RankingPreviewCard } from '@/src/components/home/RankingPreviewCard';
import { SummaryCard } from '@/src/components/home/SummaryCard';
import { AppText } from '@/src/components/common/AppText';
import { useHomeData } from '@/src/screens/Home/useHomeData';
import { colorPalette, theme } from '@/src/theme';

const integrationApps = [
  {
    id: 'strava',
    name: 'Strava',
    subtitle: 'Atividades e volume automaticos',
    badge: 'STRAVA',
  },
  {
    id: 'apple-health',
    name: 'Apple Health',
    subtitle: 'Saude e corridas em um so lugar',
    badge: 'HEALTH',
  },
];

export function HomeScreen() {
  const { currentUser, featuredEvent, featuredChallenge, ranking, runSummary, summaryItems } = useHomeData();

  if (!featuredEvent || !featuredChallenge) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundGlowTop} />
      <View style={styles.backgroundGlowMiddle} />
      <View style={styles.backgroundGlowBottom} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HomeHeader user={currentUser} />

        <View style={styles.heroBlock}>
          <View style={styles.heroText}>
            <AppText tone="secondary" style={styles.heroEyebrow}>
              ECOSSISTEMA VYTRA
            </AppText>
            <AppText weight="bold" style={styles.heroTitle}>
              Menos ruido. Mais foco no que move sua semana.
            </AppText>
          </View>
          <SummaryCard items={summaryItems} distanceLabel={runSummary.distanceLabel} />
        </View>

        <View style={styles.section}>
          <FeaturedEventCard event={featuredEvent} />
        </View>

        <View style={styles.section}>
          <ConnectAppsCard apps={integrationApps} />
        </View>

        <View style={styles.section}>
          <RankingPreviewCard users={ranking} />
        </View>

        <View style={styles.section}>
          <ChallengePreviewCard challenge={featuredChallenge} />
        </View>
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
    paddingHorizontal: 20,
    paddingTop: theme.spacing.lg,
    paddingBottom: 132,
    gap: 28,
  },
  heroBlock: {
    gap: theme.spacing.lg,
  },
  heroText: {
    gap: theme.spacing.sm,
    paddingRight: 28,
  },
  heroEyebrow: {
    fontSize: 11,
    letterSpacing: 2.8,
  },
  heroTitle: {
    fontSize: 24,
    lineHeight: 31,
  },
  section: {
    gap: theme.spacing.md,
  },
  backgroundGlowTop: {
    position: 'absolute',
    top: -90,
    right: -60,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(0, 217, 255, 0.10)',
  },
  backgroundGlowMiddle: {
    position: 'absolute',
    top: 220,
    left: -90,
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: 'rgba(124, 58, 237, 0.12)',
  },
  backgroundGlowBottom: {
    position: 'absolute',
    bottom: 100,
    right: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(163, 255, 18, 0.06)',
  },
});
