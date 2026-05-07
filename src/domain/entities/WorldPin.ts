import { WorldPinProps } from '@/src/types/entities';

export class WorldPin {
  constructor(public readonly props: WorldPinProps) {}

  get approximateLocation() {
    return `${this.props.city}, ${this.props.state}, ${this.props.country}`;
  }
}
