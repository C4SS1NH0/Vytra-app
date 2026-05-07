import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from '@/src/components/common/PrimaryButton';
import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { EventProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

type EventCardProps = {
  event: EventProps;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.badge}>
        <AppText weight="bold" style={styles.badgeText}>
          Parceiro
        </AppText>
      </View>
      <View style={styles.content}>
        <View style={styles.metaRow}>
          <AppText tone="secondary">{event.date}</AppText>
          <AppText tone="secondary">{event.time}</AppText>
        </View>
        <AppText weight="bold" style={styles.title}>
          {event.title}
        </AppText>
        <AppText tone="secondary" style={styles.description}>
          {event.location} · {event.distanceKm} km · {event.participants} participantes confirmados.
        </AppText>
      </View>
      <View style={styles.footer}>
        <View>
          <AppText tone="secondary" style={styles.costLabel}>
            Custo
          </AppText>
          <AppText weight="bold" style={styles.costValue}>
            {event.sparksCost} Sparks
          </AppText>
        </View>
        <PrimaryButton label="Participar com Sparks" />
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.md,
    backgroundColor: colorPalette.card,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: theme.radius.pill,
    backgroundColor: 'rgba(124, 58, 237, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.32)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
  },
  badgeText: {
    color: colorPalette.secondary,
    fontSize: theme.typography.caption,
  },
  content: {
    gap: theme.spacing.xs,
  },
  metaRow: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  title: {
    fontSize: 22,
  },
  description: {
    lineHeight: 21,
  },
  footer: {
    gap: theme.spacing.md,
  },
  costLabel: {
    fontSize: theme.typography.caption,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  costValue: {
    fontSize: theme.typography.bodyLarge,
  },
});
