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
    id: 'run-1b',
    userId: 'user-1',
    distanceKm: 12.3,
    durationMinutes: 69,
    pace: '5:37',
    date: '2026-05-04T06:10:00.000Z',
    mapImage: 'neon-route-1b',
  }),
  RunService.createRun({
    id: 'run-1c',
    userId: 'user-1',
    distanceKm: 4.8,
    durationMinutes: 26,
    pace: '5:25',
    date: '2026-05-02T19:05:00.000Z',
    mapImage: 'neon-route-1c',
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
  RunService.createRun({
    id: 'run-3',
    userId: 'user-3',
    distanceKm: 7.8,
    durationMinutes: 43,
    pace: '5:30',
    date: '2026-05-05T10:45:00.000Z',
    mapImage: 'post-image-3',
  }),
  RunService.createRun({
    id: 'run-4',
    userId: 'user-4',
    distanceKm: 5.2,
    durationMinutes: 29,
    pace: '5:35',
    date: '2026-05-04T21:00:00.000Z',
    mapImage: 'post-image-4',
  }),
];
