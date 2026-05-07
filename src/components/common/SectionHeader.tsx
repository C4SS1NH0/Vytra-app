import { StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/common/AppText';
import { colorPalette, theme } from '@/src/theme';

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  caption?: string;
};

export function SectionHeader({ title, eyebrow, caption }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      {eyebrow ? (
        <AppText tone="accent" weight="bold" style={styles.eyebrow}>
          {eyebrow}
        </AppText>
      ) : null}
      <View style={styles.row}>
        <AppText weight="bold" style={styles.title}>
          {title}
        </AppText>
        <View style={styles.line} />
      </View>
      {caption ? (
        <AppText tone="secondary" style={styles.caption}>
          {caption}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.xs,
  },
  eyebrow: {
    fontSize: theme.typography.caption,
    letterSpacing: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  title: {
    fontSize: theme.typography.title,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colorPalette.border,
  },
  caption: {
    lineHeight: 20,
  },
});
