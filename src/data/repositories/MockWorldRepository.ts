import {
  weeklyUsersMock,
  worldCommunityStatsMock,
  worldPinsMock,
  worldWeeklyRunsMock,
} from '@/src/data/mocks';
import { WorldRepository } from '@/src/domain/repositories';

export class MockWorldRepository implements WorldRepository {
  getWeeklyUsers() {
    return weeklyUsersMock;
  }

  getPins() {
    return worldPinsMock;
  }

  getCommunityStats() {
    return worldCommunityStatsMock;
  }

  getWeeklyRuns() {
    return worldWeeklyRunsMock;
  }
}
