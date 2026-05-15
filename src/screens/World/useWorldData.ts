import { MockWorldRepository } from '@/src/data/repositories';
import { PrivacyService, RankingService } from '@/src/domain/services';
import { WorldGlobePin, WorldRankingEntry, WorldWeeklyStat } from '@/src/screens/World/types';

const worldRepository = new MockWorldRepository();

const mapPositions = [
  { mapX: '18%', mapY: '30%', tone: 'secondary' as const },
  { mapX: '37%', mapY: '42%', tone: 'primary' as const, isPrimary: true, badgeLabel: '+2' },
  { mapX: '56%', mapY: '34%', tone: 'secondary' as const },
  { mapX: '70%', mapY: '48%', tone: 'secondary' as const },
  { mapX: '48%', mapY: '62%', tone: 'primary' as const },
] as const;

export function useWorldData() {
  const weeklyUsers = worldRepository.getWeeklyUsers();
  const weeklyRuns = worldRepository.getWeeklyRuns();
  const communityStats = worldRepository.getCommunityStats();
  const pinsSource = worldRepository.getPins();

  const ranking = RankingService.getWeeklyRanking(weeklyUsers).map((user) => ({
    ...user,
    weeklyRuns: weeklyRuns[user.id] ?? 0,
  })) as WorldRankingEntry[];

  const pins = pinsSource.map((pin, index) => ({
    ...pin,
    ...mapPositions[index % mapPositions.length],
  })) as WorldGlobePin[];

  const stats: WorldWeeklyStat[] = [
    {
      id: 'total-km',
      label: 'Total corrido',
      value: `${communityStats.totalKm} km`,
      helper: 'Quilometragem somada da comunidade Vytra nesta semana.',
      icon: 'globe',
      tone: 'primary',
    },
    {
      id: 'active-runners',
      label: 'Corredores ativos',
      value: `${communityStats.activeRunners}`,
      helper: 'Atletas em movimento no radar global sem expor coordenadas exatas.',
      icon: 'users',
      tone: 'accent',
    },
  ];

  function getSafeLocation(pinId: string) {
    const pin = pinsSource.find((item) => item.id === pinId);

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
