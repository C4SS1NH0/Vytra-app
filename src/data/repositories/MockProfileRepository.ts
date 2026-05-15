import { currentUserMock, eloMock, runsMock } from '@/src/data/mocks';
import { ProfileRepository } from '@/src/domain/repositories';

export class MockProfileRepository implements ProfileRepository {
  getCurrentUser() {
    return currentUserMock;
  }

  getRunsByUser(userId: string) {
    return runsMock.filter((run) => run.userId === userId);
  }

  getElo() {
    return eloMock;
  }
}
