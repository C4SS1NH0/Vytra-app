import { SparkService } from '@/src/domain/services/SparkService';
import { RunProps } from '@/src/types/entities';

export class RunService {
  static createRun(run: Omit<RunProps, 'sparksEarned'>): RunProps {
    return {
      ...run,
      sparksEarned: SparkService.calculateSparks(run.distanceKm),
    };
  }
}
