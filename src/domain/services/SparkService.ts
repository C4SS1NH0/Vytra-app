export class SparkService {
  static calculateSparks(distanceKm: number) {
    if (distanceKm <= 0) {
      return 0;
    }

    return Math.floor(distanceKm);
  }
}
