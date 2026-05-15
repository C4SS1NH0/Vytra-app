import {
  challengesMock,
  currentUserMock,
  eventsMock,
  runsMock,
  weeklyUsersMock,
} from '@/src/data/mocks';
import { HomeRepository } from '@/src/domain/repositories';

export class MockHomeRepository implements HomeRepository {
  getCurrentUser() {
    return currentUserMock;
  }

  getRuns() {
    return runsMock;
  }

  getFeaturedEvent() {
    return eventsMock[0];
  }

  getChallenges() {
    return challengesMock;
  }

  getWeeklyUsers() {
    return weeklyUsersMock;
  }
}
