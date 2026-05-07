import {
  weeklyUsersMock,
  worldCommunityStatsMock,
  worldPinsMock,
  worldWeeklyRunsMock,
} from '@/src/data/mocks';
import { PrivacyService, RankingService } from '@/src/domain/services';
import { WorldGlobePin, WorldRankingEntry, WorldWeeklyStat } from '@/src/screens/World/types';

const mapPositions = [
  { mapX: '18%', mapY: '30%', tone: 'secondary' as const },
  { mapX: '37%', mapY: '42%', tone: 'primary' as const, isPrimary: true, badgeLabel: '+2' },
  { mapX: '56%', mapY: '34%', tone: 'secondary' as const },
  { mapX: '70%', mapY: '48%', tone: 'secondary' as const },
  { mapX: '48%', mapY: '62%', tone: 'primary' as const },
] as const;

export function useWorldData() {
  const ranking = RankingService.getWeeklyRanking(weeklyUsersMock).map((user) => ({
    ...user,
    weeklyRuns: worldWeeklyRunsMock[user.id] ?? 0,
  })) as WorldRankingEntry[];

  const pins = worldPinsMock.map((pin, index) => ({
    ...pin,
    ...mapPositions[index % mapPositions.length],
  })) as WorldGlobePin[];

  const stats: WorldWeeklyStat[] = [
    {
      id: 'total-km',
      label: 'Total corrido',
      value: `${worldCommunityStatsMock.totalKm} km`,
      helper: 'Quilometragem somada da comunidade Vytra nesta semana.',
      icon: 'globe',
      tone: 'primary',
    },
    {
      id: 'active-runners',
      label: 'Corredores ativos',
      value: `${worldCommunityStatsMock.activeRunners}`,
      helper: 'Atletas em movimento no radar global sem expor coordenadas exatas.',
      icon: 'users',
      tone: 'accent',
    },
  ];

  function getSafeLocation(pinId: string) {
    const pin = worldPinsMock.find((item) => item.id === pinId);

    if (!pin) {
      return '';
    }

    return PrivacyService.getSafeLocation(pin);
  }

  return {
    pins,
    podium: ranking.slice(0, 3),
    rankingList: ranking.slice(3, 5),
    stats,
    getSafeLocation,
  };
}
