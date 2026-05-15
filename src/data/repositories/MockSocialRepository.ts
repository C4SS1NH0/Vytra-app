import { postsMock } from '@/src/data/mocks';
import { SocialRepository } from '@/src/domain/repositories';

export class MockSocialRepository implements SocialRepository {
  getPosts() {
    return postsMock;
  }
}
