import { currentUserMock, weeklyUsersMock } from '@/src/data/mocks/users';
import { WorldPinProps } from '@/src/types/entities';

export const worldPinsMock: WorldPinProps[] = [
  {
    id: 'pin-1',
    user: currentUserMock,
    latitude: -23.55,
    longitude: -46.63,
    city: 'Sao Paulo',
    state: 'SP',
    country: 'Brasil',
    totalKm: 82.4,
    sparks: 126,
  },
  {
    id: 'pin-2',
    user: weeklyUsersMock[1],
    latitude: -22.9,
    longitude: -47.06,
    city: 'Campinas',
    state: 'SP',
    country: 'Brasil',
    totalKm: 91.2,
    sparks: 138,
  },
  {
    id: 'pin-3',
    user: weeklyUsersMock[2],
    latitude: -25.43,
    longitude: -49.27,
    city: 'Curitiba',
    state: 'PR',
    country: 'Brasil',
    totalKm: 87.1,
    sparks: 132,
  },
  {
    id: 'pin-4',
    user: weeklyUsersMock[3],
    latitude: -19.92,
    longitude: -43.94,
    city: 'Belo Horizonte',
    state: 'MG',
    country: 'Brasil',
    totalKm: 79.5,
    sparks: 118,
  },
  {
    id: 'pin-5',
    user: weeklyUsersMock[4],
    latitude: -8.05,
    longitude: -34.88,
    city: 'Recife',
    state: 'PE',
    country: 'Brasil',
    totalKm: 74.8,
    sparks: 109,
  },
];

export const worldCommunityStatsMock = {
  totalKm: 891,
  activeRunners: 83,
};

export const worldWeeklyRunsMock: Record<string, number> = {
  'user-1': 14,
  'user-2': 16,
  'user-3': 15,
  'user-4': 12,
  'user-5': 11,
};
