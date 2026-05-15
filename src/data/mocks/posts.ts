import { runsMock } from '@/src/data/mocks/runs';
import { currentUserMock, weeklyUsersMock } from '@/src/data/mocks/users';
import { PostProps } from '@/src/types/entities';

export const postsMock: PostProps[] = [
  {
    id: 'post-1',
    user: currentUserMock,
    type: 'run',
    content: 'Fechei uma corrida leve com sprint final e energia total.',
    run: runsMock[0],
    image: 'post-image-1',
    likes: 84,
    comments: 12,
    createdAt: '2h',
    locationLabel: 'Sao Paulo, SP',
  },
  {
    id: 'post-2',
    user: weeklyUsersMock[1],
    type: 'challenge',
    content: 'Meta semanal quase completa. Bora puxar mais 5 km hoje.',
    run: runsMock[3],
    image: 'post-image-2',
    likes: 132,
    comments: 19,
    createdAt: '5h',
    locationLabel: 'Campinas, SP',
  },
  {
    id: 'post-3',
    user: weeklyUsersMock[2],
    type: 'photo',
    content: 'Treino finalizado com vista limpa e energia la em cima.',
    run: runsMock[4],
    image: 'post-image-3',
    likes: 97,
    comments: 14,
    createdAt: '8h',
    locationLabel: 'Curitiba, PR',
  },
  {
    id: 'post-4',
    user: weeklyUsersMock[3],
    type: 'achievement',
    content: 'Novo recorde de constancia semanal. Sete dias seguidos sem quebrar o ritmo.',
    run: runsMock[5],
    image: 'post-image-4',
    likes: 65,
    comments: 8,
    createdAt: '1d',
    locationLabel: 'Belo Horizonte, MG',
  },
];
