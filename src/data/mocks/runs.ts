import { RunService } from '@/src/domain/services';
import { RunProps } from '@/src/types/entities';

export const runsMock: RunProps[] = [
  RunService.createRun({
    id: 'run-1',
    userId: 'user-1',
    distanceKm: 6.4,
    durationMinutes: 38,
    pace: '5:56',
    date: '2026-05-06T07:20:00.000Z',
    mapImage: 'neon-route-1',
  }),
  RunService.createRun({
    id: 'run-2',
    userId: 'user-2',
    distanceKm: 10.2,
    durationMinutes: 58,
    pace: '5:41',
    date: '2026-05-05T18:10:00.000Z',
    mapImage: 'neon-route-2',
  }),
];
