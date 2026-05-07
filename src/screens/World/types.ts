import { WorldPinProps, UserProps } from '@/src/types/entities';

export type WorldPinTone = 'primary' | 'secondary';

export type WorldGlobePin = WorldPinProps & {
  mapX: string;
  mapY: string;
  tone: WorldPinTone;
  isPrimary?: boolean;
  badgeLabel?: string;
};

export type WorldWeeklyStat = {
  id: string;
  label: string;
  value: string;
  helper: string;
  icon: 'globe' | 'users';
  tone: WorldPinTone | 'accent';
};

export type WorldRankingEntry = UserProps & {
  weeklyRuns: number;
};
