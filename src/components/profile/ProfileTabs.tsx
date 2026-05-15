import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { colorPalette, theme } from '@/src/theme';

export type ProfileTabValue = 'profile' | 'runs' | 'records';

type ProfileTabsProps = {
  activeTab: ProfileTabValue;
  onChange: (value: ProfileTabValue) => void;
};

const tabItems: { label: string; value: ProfileTabValue }[] = [
  { label: 'Perfil', value: 'profile' },
  { label: 'Corridas', value: 'runs' },
  { label: 'Recordes', value: 'records' },
];

export function ProfileTabs({ activeTab, onChange }: ProfileTabsProps) {
  return (
    <View style={styles.row}>
      {tabItems.map((tab) => {
        const active = tab.value === activeTab;

        return (
          <Pressable
            key={tab.value}
            onPress={() => onChange(tab.value)}
            style={[styles.tab, active && styles.tabActive]}>
            <AppText weight="bold" style={[styles.tabLabel, active && styles.tabLabelActive]}>
              {tab.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.sm,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  tabActive: {
    backgroundColor: 'rgba(163, 255, 18, 0.12)',
    borderColor: 'rgba(163, 255, 18, 0.28)',
  },
  tabLabel: {
    color: colorPalette.textSecondary,
  },
  tabLabelActive: {
    color: colorPalette.accent,
  },
});
