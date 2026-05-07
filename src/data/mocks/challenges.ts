import { ChallengeProps } from '@/src/types/entities';

export const challengesMock: ChallengeProps[] = [
  {
    id: 'challenge-1',
    title: 'Sprint da Semana',
    description: 'Complete 20 km e desbloqueie bonus de comunidade.',
    goalKm: 20,
    currentKm: 12,
    participants: 184,
    status: 'active',
  },
  {
    id: 'challenge-2',
    title: 'Rota Noturna',
    description: 'Acumule 12 km em corridas apos as 18h.',
    goalKm: 12,
    currentKm: 4,
    participants: 96,
    status: 'active',
  },
];
