import { ChallengeProps } from '@/src/types/entities';

export class Challenge {
  constructor(public readonly props: ChallengeProps) {}

  get progressPercent() {
    if (this.props.goalKm <= 0) {
      return 0;
    }

    return Math.min(100, Math.floor((this.props.currentKm / this.props.goalKm) * 100));
  }
}
