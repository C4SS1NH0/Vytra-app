import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ComponentProps } from 'react';

export type AppTab = {
  route: 'index' | 'world' | 'social' | 'profile';
  label: string;
  icon: ComponentProps<typeof FontAwesome>['name'];
};

export const appTabs: AppTab[] = [
  { route: 'index', label: 'Inicio', icon: 'home' },
  { route: 'world', label: 'Mundo', icon: 'globe' },
  { route: 'social', label: 'Social', icon: 'users' },
  { route: 'profile', label: 'Perfil', icon: 'user-circle' },
];
