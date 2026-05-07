import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ComponentProps } from 'react';

export function TabBarIcon(props: {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -2 }} {...props} />;
}
