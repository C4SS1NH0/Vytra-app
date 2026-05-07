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
  },
  {
    id: 'post-2',
    user: weeklyUsersMock[1],
    type: 'challenge',
    content: 'Meta semanal quase completa. Bora puxar mais 5 km hoje.',
    run: runsMock[1],
    image: 'post-image-2',
    likes: 132,
    comments: 19,
    createdAt: '5h',
  },
];
