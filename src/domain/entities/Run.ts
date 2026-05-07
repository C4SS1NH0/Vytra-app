import { RunProps } from '@/src/types/entities';

export class Run {
  constructor(public readonly props: RunProps) {}

  get summary() {
    return `${this.props.distanceKm} km in ${this.props.durationMinutes} min`;
  }
}
