import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { WorldWeeklyStat } from '@/src/screens/World/types';
import { colorPalette, theme } from '@/src/theme';

type WeeklyStatsCardProps = {
  stats: WorldWeeklyStat[];
};

const iconTone = {
  primary: colorPalette.primary,
  secondary: '#C4B5FD',
  accent: colorPalette.accent,
} as const;

export function WeeklyStatsCard({ stats }: WeeklyStatsCardProps) {
  return (
    <GlassCard style={styles.card}>
      <AppText tone="secondary" weight="bold" style={styles.eyebrow}>
        ESTA SEMANA
      </AppText>

      <View style={styles.metrics}>
        {stats.map((stat, index) => (
          <View key={stat.id} style={[styles.metric, index < stats.length - 1 && styles.metricBorder]}>
            <View style={styles.metricHeader}>
              <View style={[styles.iconWrap, { shadowColor: iconTone[stat.tone] }]}>
                <FontAwesome color={iconTone[stat.tone]} name={stat.icon} size={14} />
              </View>
              <AppText tone="secondary" style={styles.metricLabel}>
                {stat.label}
              </AppText>
            </View>
            <AppText weight="bold" style={styles.metricValue}>
              {stat.value}
            </AppText>
            <AppText tone="secondary" style={styles.metricHelper}>
              {stat.helper}
            </AppText>
          </View>
        ))}
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: -72,
    marginHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: 'rgba(16, 24, 39, 0.82)',
    borderColor: 'rgba(255,255,255,0.12)',
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 2,
  },
  metrics: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
  },
  metric: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  metricBorder: {
    borderRightWidth: 1,
    borderRightColor: colorPalette.border,
    paddingRight: theme.spacing.md,
    marginRight: theme.spacing.md,
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  iconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
  },
  metricLabel: {
    fontSize: 12,
  },
  metricValue: {
    fontSize: 28,
    lineHeight: 32,
  },
  metricHelper: {
    lineHeight: 18,
  },
});
