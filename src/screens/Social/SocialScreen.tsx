import { useState } from 'react';

import { ScreenContainer } from '@/src/components/common/ScreenContainer';
import { SocialComposer } from '@/src/components/social/SocialComposer';
import { SocialFilterTabs } from '@/src/components/social/SocialFilterTabs';
import { SocialPostCard } from '@/src/components/social/SocialPostCard';
import { currentUserMock } from '@/src/data/mocks';
import { SocialFilter, useSocialData } from '@/src/screens/Social/useSocialData';
import { StyleSheet, View } from 'react-native';

export function SocialScreen() {
  const [activeFilter, setActiveFilter] = useState<SocialFilter>('all');
  const { getFilteredPosts } = useSocialData();
  const posts = getFilteredPosts(activeFilter);

  return (
    <ScreenContainer
      title="Vytra Social"
      subtitle="Feed da comunidade preparado para filtros, posts de corrida e conexao com o mapa do mundo.">
      <SocialComposer avatar={currentUserMock.avatar} />
      <SocialFilterTabs activeFilter={activeFilter} onChange={setActiveFilter} />
      <View style={styles.feed}>
        {posts.map((post) => (
          <SocialPostCard key={post.id} post={post} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  feed: {
    gap: 16,
  },
});
