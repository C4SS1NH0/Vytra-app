import { PostProps } from '@/src/types/entities';

export interface SocialRepository {
  getPosts(): PostProps[];
}
