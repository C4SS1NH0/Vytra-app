import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { GlassCard } from '@/src/components/common/GlassCard';
import { PostProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';
import { formatDurationMinutes, formatKm } from '@/src/utils/formatters';

type SocialPostCardProps = {
  post: PostProps;
};

export function SocialPostCard({ post }: SocialPostCardProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <View style={styles.identityRow}>
          <View style={styles.avatar}>
            <AppText weight="bold" style={styles.avatarText}>
              {post.user.avatar}
            </AppText>
          </View>
          <View style={styles.identity}>
            <AppText weight="bold">{post.user.name}</AppText>
            <AppText tone="secondary">
              {post.createdAt} {post.locationLabel ? `· ${post.locationLabel}` : ''}
            </AppText>
          </View>
        </View>
        <View style={styles.typePill}>
          <AppText weight="bold" style={styles.typeLabel}>
            {post.type.toUpperCase()}
          </AppText>
        </View>
      </View>

      <AppText style={styles.content}>{post.content}</AppText>

      {post.run ? (
        <View style={styles.metricsRow}>
          <View style={styles.metricTile}>
            <AppText tone="secondary" style={styles.metricLabel}>
              Distancia
            </AppText>
            <AppText weight="bold">{formatKm(post.run.distanceKm)}</AppText>
          </View>
          <View style={styles.metricTile}>
            <AppText tone="secondary" style={styles.metricLabel}>
              Tempo
            </AppText>
            <AppText weight="bold">{formatDurationMinutes(post.run.durationMinutes)}</AppText>
          </View>
          <View style={styles.metricTile}>
            <AppText tone="secondary" style={styles.metricLabel}>
              Pace
            </AppText>
            <AppText weight="bold">{post.run.pace}</AppText>
          </View>
          <View style={styles.metricTile}>
            <AppText tone="secondary" style={styles.metricLabel}>
              Sparks
            </AppText>
            <AppText weight="bold">{post.run.sparksEarned}</AppText>
          </View>
        </View>
      ) : null}

      <View style={styles.mapCard}>
        <View style={styles.mapGlowA} />
        <View style={styles.mapGlowB} />
        <View style={[styles.routeLine, styles.routeLineOne]} />
        <View style={[styles.routeLine, styles.routeLineTwo]} />
        <View style={[styles.routeDot, styles.routeStart]} />
        <View style={[styles.routeDot, styles.routeEnd]} />
        <AppText weight="bold" style={styles.mapLabel}>
          MINI MAPA DA CORRIDA
        </AppText>
      </View>

      <View style={styles.footer}>
        <View style={styles.reactions}>
          <Pressable style={styles.actionButton}>
            <FontAwesome color={colorPalette.primary} name="heart-o" size={14} />
            <AppText tone="secondary">{post.likes}</AppText>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <FontAwesome color={colorPalette.textSecondary} name="comment-o" size={14} />
            <AppText tone="secondary">{post.comments}</AppText>
          </Pressable>
        </View>
        <Pressable style={styles.worldButton}>
          <AppText weight="bold" style={styles.worldButtonText}>
            Ver no Mundo
          </AppText>
        </Pressable>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  identityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    flex: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(124, 58, 237, 0.16)',
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.28)',
  },
  avatarText: {
    color: colorPalette.info,
  },
  identity: {
    flex: 1,
    gap: 2,
  },
  typePill: {
    alignSelf: 'flex-start',
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 7,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  typeLabel: {
    fontSize: 11,
    color: colorPalette.accent,
    letterSpacing: 1,
  },
  content: {
    lineHeight: 22,
  },
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  metricTile: {
    minWidth: '47%',
    flex: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: colorPalette.border,
    gap: theme.spacing.xs,
  },
  metricLabel: {
    fontSize: theme.typography.caption,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  mapCard: {
    position: 'relative',
    height: 136,
    overflow: 'hidden',
    borderRadius: theme.radius.md,
    backgroundColor: 'rgba(4, 8, 20, 0.92)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.14)',
    justifyContent: 'flex-end',
    padding: theme.spacing.md,
  },
  mapGlowA: {
    position: 'absolute',
    top: 10,
    left: '18%',
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 217, 255, 0.1)',
  },
  mapGlowB: {
    position: 'absolute',
    bottom: -24,
    right: 12,
    width: 140,
    height: 100,
    borderRadius: 999,
    backgroundColor: 'rgba(124, 58, 237, 0.16)',
  },
  routeLine: {
    position: 'absolute',
    height: 2,
    backgroundColor: colorPalette.accent,
  },
  routeLineOne: {
    top: 56,
    left: '15%',
    width: '45%',
    transform: [{ rotate: '18deg' }],
  },
  routeLineTwo: {
    top: 66,
    right: '18%',
    width: '32%',
    transform: [{ rotate: '-24deg' }],
  },
  routeDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: colorPalette.primary,
  },
  routeStart: {
    top: 48,
    left: '12%',
  },
  routeEnd: {
    top: 46,
    right: '15%',
  },
  mapLabel: {
    color: colorPalette.textSecondary,
    fontSize: theme.typography.caption,
    letterSpacing: 1.2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  reactions: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 9,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  worldButton: {
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.28)',
  },
  worldButtonText: {
    color: colorPalette.primary,
  },
});
