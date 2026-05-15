import { MockHomeRepository } from '@/src/data/repositories';
import { ChallengeService, RankingService } from '@/src/domain/services';
import { formatKm } from '@/src/utils/formatters';

const homeRepository = new MockHomeRepository();

export function useHomeData() {
  const currentUser = homeRepository.getCurrentUser();
  const runs = homeRepository.getRuns();
  const currentUserRuns = runs.filter((run) => run.userId === currentUser.id);
  const ranking = RankingService.getWeeklyRanking(homeRepository.getWeeklyUsers()).slice(0, 3);
  const activeChallenges = ChallengeService.getActiveChallenges(homeRepository.getChallenges());
  const featuredEvent = homeRepository.getFeaturedEvent();
  const featuredChallenge = activeChallenges[0];
  const totalDistance = currentUserRuns.reduce((total, run) => total + run.distanceKm, 0);

  const summaryItems = [
    {
      label: 'Sparks',
      value: `${currentUser.sparks}`,
      suffix: 'Sparks',
      icon: 'bolt' as const,
    },
    {
      label: 'Corridas',
      value: `${currentUserRuns.length}`,
      suffix: 'Corridas',
      icon: 'line-chart' as const,
    },
    {
      label: 'Streak',
      value: `${currentUser.streak}`,
      suffix: 'dias',
      icon: 'repeat' as const,
    },
    {
      label: 'Rank',
      value: `#${currentUser.rank}`,
      suffix: 'semana',
      icon: 'trophy' as const,
    },
  ];

  return {
    currentUser,
    featuredEvent,
    ranking,
    featuredChallenge,
    summaryItems,
    runSummary: {
      count: currentUserRuns.length,
      distanceLabel: formatKm(totalDistance),
    },
  };
}
