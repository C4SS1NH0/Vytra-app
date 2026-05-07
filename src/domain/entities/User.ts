import { UserProps } from '@/src/types/entities';

export class User {
  constructor(public readonly props: UserProps) {}

  get displayName() {
    return this.props.name;
  }

  get locationLabel() {
    return `${this.props.city}, ${this.props.state}, ${this.props.country}`;
  }
}
