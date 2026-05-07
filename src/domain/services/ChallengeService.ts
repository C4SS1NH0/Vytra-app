import { ChallengeProps } from '@/src/types/entities';

export class ChallengeService {
  static getActiveChallenges(challenges: ChallengeProps[]) {
    return challenges.filter((challenge) => challenge.status === 'active');
  }
}
