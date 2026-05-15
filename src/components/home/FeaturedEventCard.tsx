import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from '@/src/components/common/PrimaryButton';
import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { EventProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

type FeaturedEventCardProps = {
  event: EventProps;
};

export function FeaturedEventCard({ event }: FeaturedEventCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.banner}>
        <View style={styles.bannerGlowPrimary} />
        <View style={styles.bannerGlowSecondary} />
        <View style={styles.routeArc} />
        <View style={styles.pinShell}>
          <FontAwesome color={colorPalette.primary} name="map-marker" size={16} />
        </View>
        <View style={styles.bannerLabel}>
          <AppText weight="bold" style={styles.bannerLabelText}>
            EVENTO PARCEIRO
          </AppText>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <View style={styles.titleBlock}>
            <AppText weight="bold" style={styles.title}>
              {event.title}
            </AppText>
            <AppText tone="secondary" style={styles.location}>
              {event.location}
            </AppText>
          </View>
          <View style={styles.sparkBadge}>
            <AppText weight="bold" style={styles.sparkText}>
              {event.sparksCost} Sparks
            </AppText>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <FontAwesome color={colorPalette.textSecondary} name="calendar-o" size={14} />
            <AppText tone="secondary">{event.date}</AppText>
          </View>
          <View style={styles.metaItem}>
            <FontAwesome color={colorPalette.textSecondary} name="clock-o" size={14} />
            <AppText tone="secondary">{event.time}</AppText>
          </View>
          <View style={styles.metaItem}>
            <FontAwesome color={colorPalette.textSecondary} name="road" size={14} />
            <AppText tone="secondary">{event.distanceKm} km</AppText>
          </View>
        </View>

        <View style={styles.footer}>
          <AppText tone="secondary">
            {event.participants} atletas confirmados
          </AppText>
          <PrimaryButton label="Participar" />
        </View>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    padding: 0,
    backgroundColor: 'rgba(16, 24, 39, 0.9)',
  },
  banner: {
    height: 176,
    overflow: 'hidden',
    backgroundColor: '#0A1020',
    borderBottomWidth: 1,
    borderBottomColor: colorPalette.border,
    justifyContent: 'space-between',
    padding: theme.spacing.lg,
  },
  bannerGlowPrimary: {
    position: 'absolute',
    top: -36,
    left: '8%',
    width: 210,
    height: 210,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 217, 255, 0.16)',
  },
  bannerGlowSecondary: {
    position: 'absolute',
    bottom: -60,
    right: -10,
    width: 190,
    height: 190,
    borderRadius: 999,
    backgroundColor: 'rgba(124, 58, 237, 0.20)',
  },
  routeArc: {
    position: 'absolute',
    right: 36,
    bottom: 34,
    width: 140,
    height: 140,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    borderTopColor: 'rgba(0, 217, 255, 0.34)',
    borderLeftColor: 'rgba(0, 217, 255, 0.08)',
    transform: [{ rotate: '-22deg' }],
  },
  pinShell: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.20)',
  },
  bannerLabel: {
    alignSelf: 'flex-start',
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  bannerLabelText: {
    fontSize: 11,
    letterSpacing: 1.3,
    color: colorPalette.textPrimary,
  },
  content: {
    gap: theme.spacing.lg,
    padding: theme.spacing.lg,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: theme.spacing.md,
  },
  titleBlock: {
    flex: 1,
    gap: 6,
  },
  title: {
    fontSize: 24,
  },
  location: {
    lineHeight: 20,
  },
  sparkBadge: {
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    backgroundColor: 'rgba(163, 255, 18, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(163, 255, 18, 0.18)',
  },
  sparkText: {
    color: colorPalette.accent,
    fontSize: 13,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
});
