import { ChallengeProps, EventProps, RunProps, UserProps } from '@/src/types/entities';

export interface HomeRepository {
  getCurrentUser(): UserProps;
  getRuns(): RunProps[];
  getFeaturedEvent(): EventProps | undefined;
  getChallenges(): ChallengeProps[];
  getWeeklyUsers(): UserProps[];
}
