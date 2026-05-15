import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { UserProps } from '@/src/types/entities';
import { colorPalette, theme } from '@/src/theme';

type HomeHeaderProps = {
  user: UserProps;
};

export function HomeHeader({ user }: HomeHeaderProps) {
  const firstName = user.name.split(' ')[0];

  return (
    <View style={styles.container}>
      <View style={styles.identity}>
        <AppText tone="accent" weight="bold" style={styles.brand}>
          VYTRA
        </AppText>
        <AppText weight="bold" style={styles.greeting}>
          {`Ola, ${firstName}`}
        </AppText>
      </View>

      <View style={styles.actions}>
        <Pressable accessibilityRole="button" style={styles.iconButton}>
          <FontAwesome color={colorPalette.textPrimary} name="bell-o" size={16} />
        </Pressable>
        <View style={styles.avatar}>
          <AppText weight="bold" style={styles.avatarText}>
            {user.avatar}
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  identity: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  brand: {
    fontSize: 11,
    letterSpacing: 3.2,
  },
  greeting: {
    fontSize: 30,
    lineHeight: 34,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colorPalette.border,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 217, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.22)',
  },
  avatarText: {
    color: colorPalette.primary,
    fontSize: 13,
  },
});
