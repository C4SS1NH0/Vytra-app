import { weeklyUsersMock, worldPinsMock } from '@/src/data/mocks';
import { PrivacyService, RankingService } from '@/src/domain/services';
import { formatKm } from '@/src/utils/formatters';

const mapPositions = [
  { mapX: '58%', mapY: '56%' },
  { mapX: '52%', mapY: '46%' },
  { mapX: '60%', mapY: '67%' },
] as const;

export function useWorldData() {
  const ranking = RankingService.getWeeklyRanking(weeklyUsersMock).slice(0, 3);
  const totalKm = worldPinsMock.reduce((sum, pin) => sum + pin.totalKm, 0);

  const pins = worldPinsMock.map((pin, index) => ({
    ...pin,
    ...mapPositions[index % mapPositions.length],
  }));

  const stats = [
    {
      label: 'Total de km',
      value: formatKm(totalKm),
      helper: 'Quilometragem agregada da comunidade nesta simulacao semanal.',
    },
    {
      label: 'Corredores ativos',
      value: `${worldPinsMock.length}`,
      helper: 'Pins visiveis no holograma com localizacao aproximada.',
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
    ranking,
    stats,
    getSafeLocation,
  };
}
