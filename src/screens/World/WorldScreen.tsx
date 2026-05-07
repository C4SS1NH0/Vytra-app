import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/src/components/common/AppText';
import { HologramGlobe } from '@/src/components/world/HologramGlobe';
import { RankingPodium } from '@/src/components/world/RankingPodium';
import { RankingUserCard } from '@/src/components/world/RankingUserCard';
import { WeeklyStatsCard } from '@/src/components/world/WeeklyStatsCard';
import { WorldHeader } from '@/src/components/world/WorldHeader';
import { WorldPinModal } from '@/src/components/world/WorldPinModal';
import { useWorldData } from '@/src/screens/World/useWorldData';
import { WorldPinProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

export function WorldScreen() {
  const { pins, podium, rankingList, stats, getSafeLocation } = useWorldData();
  const [selectedPin, setSelectedPin] = useState<WorldPinProps | null>(null);

  const safeLocation = selectedPin ? getSafeLocation(selectedPin.id) : '';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topGlow} />
      <View style={styles.bottomGlow} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrap}>
          <WorldHeader />
        </View>

        <View style={styles.heroSection}>
          <View style={styles.heroFrame}>
            <HologramGlobe
              onPinPress={(pin) => setSelectedPin(pin)}
              pins={pins}
              selectedPinId={selectedPin?.id}
            />
          </View>
          <WeeklyStatsCard stats={stats} />
        </View>

        <View style={styles.rankingSection}>
          <View style={styles.sectionHeader}>
            <AppText weight="bold" style={styles.sectionTitle}>
              RANKING DA SEMANA
            </AppText>
            <AppText style={styles.sectionLink}>Ver todos</AppText>
          </View>

          <RankingPodium users={podium} />

          <View style={styles.list}>
            {rankingList.map((user, index) => (
              <RankingUserCard key={user.id} rank={index + 4} user={user} />
            ))}
          </View>
        </View>
      </ScrollView>

      <WorldPinModal
        visible={Boolean(selectedPin)}
        pin={selectedPin}
        safeLocation={safeLocation}
        onClose={() => setSelectedPin(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colorPalette.background,
  },
  content: {
    paddingTop: theme.spacing.md,
    paddingBottom: 132,
    gap: theme.spacing.xl,
  },
  heroSection: {
    gap: 0,
  },
  heroFrame: {
    paddingHorizontal: theme.spacing.lg,
  },
  headerWrap: {
    paddingHorizontal: theme.spacing.lg,
  },
  rankingSection: {
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    letterSpacing: 1,
  },
  sectionLink: {
    color: colorPalette.primary,
    fontSize: 13,
  },
  list: {
    gap: theme.spacing.md,
  },
  topGlow: {
    position: 'absolute',
    top: -80,
    right: -40,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(0, 217, 255, 0.14)',
  },
  bottomGlow: {
    position: 'absolute',
    bottom: 80,
    left: -70,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: 'rgba(124, 58, 237, 0.14)',
  },
});
