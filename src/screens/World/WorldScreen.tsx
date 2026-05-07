import { RankingCard } from '@/src/components/cards/RankingCard';
import { ScreenContainer } from '@/src/components/common/ScreenContainer';
import { SectionHeader } from '@/src/components/common/SectionHeader';
import { WorldStatCard } from '@/src/components/cards/WorldStatCard';
import { WorldMapCard } from '@/src/components/world/WorldMapCard';
import { WorldPinModal } from '@/src/components/world/WorldPinModal';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { WorldPinProps } from '@/src/types/entities';
import { theme } from '@/src/theme';
import { useWorldData } from '@/src/screens/World/useWorldData';

export function WorldScreen() {
  const { pins, ranking, stats, getSafeLocation } = useWorldData();
  const [selectedPin, setSelectedPin] = useState<WorldPinProps | null>(null);

  const safeLocation = selectedPin ? getSafeLocation(selectedPin.id) : '';

  return (
    <ScreenContainer
      title="Vytra World"
      subtitle="Camada global da comunidade com holograma, ranking semanal e descoberta segura de corredores.">
      <WorldMapCard
        pins={pins}
        selectedPinId={selectedPin?.id}
        onPinPress={(pin) => setSelectedPin(pin)}
      />

      <SectionHeader
        eyebrow="Semana"
        title="Panorama global"
        caption="Leitura resumida da atividade da comunidade sem expor coordenadas reais."
      />
      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <WorldStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            helper={stat.helper}
          />
        ))}
      </View>

      <SectionHeader
        eyebrow="Ranking"
        title="Top corredores"
        caption="Classificacao semanal por quilometragem acumulada na comunidade Vytra."
      />
      <RankingCard users={ranking} />

      <WorldPinModal
        visible={Boolean(selectedPin)}
        pin={selectedPin}
        safeLocation={safeLocation}
        onClose={() => setSelectedPin(null)}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
});
