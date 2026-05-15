import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { SocialFilter } from '@/src/screens/Social/useSocialData';
import { colorPalette, theme } from '@/src/theme';

type SocialFilterTabsProps = {
  activeFilter: SocialFilter;
  onChange: (filter: SocialFilter) => void;
};

const filterItems: { label: string; value: SocialFilter }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Conquistas', value: 'achievement' },
  { label: 'Fotos', value: 'photo' },
  { label: 'Desafios', value: 'challenge' },
];

export function SocialFilterTabs({ activeFilter, onChange }: SocialFilterTabsProps) {
  return (
    <View style={styles.row}>
      {filterItems.map((item) => {
        const active = item.value === activeFilter;

        return (
          <Pressable
            key={item.value}
            onPress={() => onChange(item.value)}
            style={[styles.pill, active && styles.pillActive]}>
            <AppText
              weight="bold"
              style={[styles.label, active && styles.labelActive]}>
              {item.label}
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
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  pill: {
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  pillActive: {
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderColor: 'rgba(0, 217, 255, 0.28)',
  },
  label: {
    fontSize: theme.typography.caption,
    color: colorPalette.textSecondary,
  },
  labelActive: {
    color: colorPalette.primary,
  },
});
