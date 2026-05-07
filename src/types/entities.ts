import { ChallengeStatus, Identifier, PostType } from '@/src/types/common';

export interface UserProps {
  id: Identifier;
  name: string;
  username: string;
  avatar: string;
  city: string;
  state: string;
  country: string;
  totalKm: number;
  sparks: number;
  streak: number;
  rank: number;
  followers: number;
  following: number;
  partners: number;
}

export interface RunProps {
  id: Identifier;
  userId: Identifier;
  distanceKm: number;
  durationMinutes: number;
  pace: string;
  sparksEarned: number;
  date: string;
  mapImage: string;
}

export interface PostProps {
  id: Identifier;
  user: UserProps;
  type: PostType;
  content: string;
  run?: RunProps;
  image?: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export interface ChallengeProps {
  id: Identifier;
  title: string;
  description: string;
  goalKm: number;
  currentKm: number;
  participants: number;
  status: ChallengeStatus;
}

export interface EventProps {
  id: Identifier;
  title: string;
  date: string;
  distanceKm: number;
  time: string;
  location: string;
  sparksCost: number;
  participants: number;
}

export interface WorldPinProps {
  id: Identifier;
  user: UserProps;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  totalKm: number;
  sparks: number;
}
