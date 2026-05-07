import { Tabs } from 'expo-router';

import { TabBarIcon } from '@/src/components/layout/TabBarIcon';
import { appTabs } from '@/src/navigation/tabs';
import { colorPalette } from '@/src/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorPalette.primary,
        tabBarInactiveTintColor: colorPalette.textSecondary,
        tabBarStyle: {
          backgroundColor: colorPalette.surface,
          borderTopColor: colorPalette.border,
          height: 76,
          paddingTop: 10,
          paddingBottom: 10,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
      }}>
      {appTabs.map((tab) => (
        <Tabs.Screen
          key={tab.route}
          name={tab.route}
          options={{
            title: tab.label,
            tabBarIcon: ({ color }) => <TabBarIcon name={tab.icon} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
