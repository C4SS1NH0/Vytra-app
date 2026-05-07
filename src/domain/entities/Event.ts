import { EventProps } from '@/src/types/entities';

export class Event {
  constructor(public readonly props: EventProps) {}

  get isPremiumEvent() {
    return this.props.sparksCost > 0;
  }
}
