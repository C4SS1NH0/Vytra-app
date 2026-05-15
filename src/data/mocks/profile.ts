import { EloProps } from '@/src/types/entities';

import { currentUserMock, weeklyUsersMock } from '@/src/data/mocks/users';

export const eloMock: EloProps = {
  id: 'elo-1',
  partner: weeklyUsersMock[1],
  weeklyGoalKm: 28,
  currentKm: 19,
  streakWeeks: 6,
  summary: `${currentUserMock.name.split(' ')[0]} e ${weeklyUsersMock[1].name.split(' ')[0]} mantem uma sequencia forte nas ultimas semanas.`,
};
