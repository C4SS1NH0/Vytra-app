import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ComponentProps } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { colorPalette, theme } from '@/src/theme';

type SummaryItem = {
  label: string;
  value: string;
  suffix: string;
  icon: ComponentProps<typeof FontAwesome>['name'];
};

type SummaryCardProps = {
  items: SummaryItem[];
  distanceLabel: string;
};

export function SummaryCard({ items, distanceLabel }: SummaryCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <AppText tone="secondary" style={styles.eyebrow}>
            RESUMO DA SEMANA
          </AppText>
          <AppText weight="bold" style={styles.title}>
            Movimento com foco
          </AppText>
        </View>
        <View style={styles.distancePill}>
          <AppText weight="bold" style={styles.distanceText}>
            {distanceLabel}
          </AppText>
        </View>
      </View>

      <View style={styles.metricsRow}>
        {items.map((item) => (
          <View key={item.label} style={styles.metricItem}>
            <View style={styles.iconBadge}>
              <FontAwesome color={colorPalette.primary} name={item.icon} size={13} />
            </View>
            <AppText weight="bold" style={styles.metricValue}>
              {item.value}
            </AppText>
            <AppText tone="secondary" style={styles.metricSuffix}>
              {item.suffix}
            </AppText>
          </View>
        ))}
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.xl,
    paddingVertical: 22,
    backgroundColor: 'rgba(16, 24, 39, 0.88)',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: theme.spacing.md,
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 2.4,
  },
  title: {
    marginTop: theme.spacing.xs,
    fontSize: 22,
  },
  distancePill: {
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  distanceText: {
    color: colorPalette.accent,
    fontSize: 13,
  },
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: theme.spacing.lg,
  },
  metricItem: {
    width: '50%',
    gap: theme.spacing.xs,
  },
  iconBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 217, 255, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.16)',
  },
  metricValue: {
    marginTop: 2,
    fontSize: 22,
    lineHeight: 24,
  },
  metricSuffix: {
    fontSize: 13,
  },
});
