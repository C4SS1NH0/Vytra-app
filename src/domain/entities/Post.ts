import { PostProps } from '@/src/types/entities';

export class Post {
  constructor(public readonly props: PostProps) {}

  get hasRunData() {
    return Boolean(this.props.run);
  }
}
