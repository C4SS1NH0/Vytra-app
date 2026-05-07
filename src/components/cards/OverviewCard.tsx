import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { colorPalette, theme } from '@/src/theme';

type OverviewCardProps = {
  title: string;
  description: string;
};

export function OverviewCard({ title, description }: OverviewCardProps) {
  return (
    <GlassCard>
      <View style={styles.row}>
        <View style={styles.dot} />
        <AppText style={styles.title} weight="semibold">
          {title}
        </AppText>
      </View>
      <AppText tone="secondary" style={styles.description}>
        {description}
      </AppText>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: colorPalette.accent,
  },
  title: {
    fontSize: theme.typography.bodyLarge,
  },
  description: {
    lineHeight: 21,
  },
});
