import { EloProps, RunProps, UserProps } from '@/src/types/entities';

export interface ProfileRepository {
  getCurrentUser(): UserProps;
  getRunsByUser(userId: string): RunProps[];
  getElo(): EloProps;
}
