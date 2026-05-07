import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from '@/src/components/common/PrimaryButton';
import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { colorPalette, theme } from '@/src/theme';

type IntegrationCardProps = {
  title: string;
  description: string;
  badge: string;
};

export function IntegrationCard({ title, description, badge }: IntegrationCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.badge}>
          <AppText weight="bold" style={styles.badgeText}>
            {badge}
          </AppText>
        </View>
      </View>
      <View style={styles.content}>
        <AppText weight="bold" style={styles.title}>
          {title}
        </AppText>
        <AppText tone="secondary" style={styles.description}>
          {description}
        </AppText>
      </View>
      <PrimaryButton label="Conectar" variant="secondary" />
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '47%',
    gap: theme.spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: colorPalette.borderStrong,
    backgroundColor: 'rgba(255,255,255,0.04)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: theme.typography.caption,
    color: colorPalette.info,
    letterSpacing: 1.1,
  },
  content: {
    gap: theme.spacing.xs,
  },
  title: {
    fontSize: theme.typography.bodyLarge,
  },
  description: {
    lineHeight: 20,
  },
});
