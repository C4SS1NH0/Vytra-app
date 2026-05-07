import { UserProps } from '@/src/types/entities';

export class RankingService {
  static getWeeklyRanking(users: UserProps[]) {
    return [...users].sort((left, right) => right.totalKm - left.totalKm);
  }
}
