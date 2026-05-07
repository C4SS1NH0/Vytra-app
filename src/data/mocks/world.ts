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
];
