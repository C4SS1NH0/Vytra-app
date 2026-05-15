import { UserProps, WorldPinProps } from '@/src/types/entities';

export interface WorldRepository {
  getWeeklyUsers(): UserProps[];
  getPins(): WorldPinProps[];
  getCommunityStats(): { totalKm: number; activeRunners: number };
  getWeeklyRuns(): Record<string, number>;
}
