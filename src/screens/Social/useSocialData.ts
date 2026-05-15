import { MockSocialRepository } from '@/src/data/repositories';
import { PostType } from '@/src/types/common';

export type SocialFilter = 'all' | 'achievement' | 'photo' | 'challenge';

const socialRepository = new MockSocialRepository();

const filterTypeMap: Record<Exclude<SocialFilter, 'all'>, PostType> = {
  achievement: 'achievement',
  photo: 'photo',
  challenge: 'challenge',
};

export function useSocialData() {
  const posts = socialRepository.getPosts();

  function getFilteredPosts(filter: SocialFilter) {
    if (filter === 'all') {
      return posts;
    }

    return posts.filter((post) => post.type === filterTypeMap[filter]);
  }

  return {
    posts,
    getFilteredPosts,
  };
}
