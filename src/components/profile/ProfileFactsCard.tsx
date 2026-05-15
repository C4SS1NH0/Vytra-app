import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { theme } from '@/src/theme';

type ProfileFact = {
  label: string;
  value: string;
};

type ProfileFactsCardProps = {
  facts: ProfileFact[];
};

export function ProfileFactsCard({ facts }: ProfileFactsCardProps) {
  return (
    <GlassCard style={styles.card}>
      {facts.map((fact) => (
        <View key={fact.label} style={styles.row}>
          <AppText tone="secondary">{fact.label}</AppText>
          <AppText weight="bold">{fact.value}</AppText>
        </View>
      ))}
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
});
