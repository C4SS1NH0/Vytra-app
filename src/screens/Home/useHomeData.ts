import { challengesMock, currentUserMock, eventsMock, runsMock, weeklyUsersMock } from '@/src/data/mocks';
import { ChallengeService, RankingService } from '@/src/domain/services';
import { formatKm } from '@/src/utils/formatters';

export function useHomeData() {
  const currentUserRuns = runsMock.filter((run) => run.userId === currentUserMock.id);
  const ranking = RankingService.getWeeklyRanking(weeklyUsersMock).slice(0, 3);
  const activeChallenges = ChallengeService.getActiveChallenges(challengesMock);
  const featuredEvent = eventsMock[0];

  const metrics = [
    {
      label: 'Sparks',
      value: `${currentUserMock.sparks}`,
      helper: 'Saldo disponivel para eventos e recompensas futuras.',
      accent: 'primary' as const,
    },
    {
      label: 'Corridas',
      value: `${currentUserRuns.length}`,
      helper: `${formatKm(currentUserRuns.reduce((total, run) => total + run.distanceKm, 0))} registradas nesta base mockada.`,
      accent: 'secondary' as const,
    },
    {
      label: 'Streak',
      value: `${currentUserMock.streak} dias`,
      helper: 'Sequencia semanal em andamento.',
      accent: 'accent' as const,
    },
    {
      label: 'Rank',
      value: `#${currentUserMock.rank}`,
      helper: 'Posicao atual no ranking semanal.',
      accent: 'info' as const,
    },
  ];

  return {
    currentUser: currentUserMock,
    featuredEvent,
    ranking,
    activeChallenges,
    metrics,
  };
}
