import { OverviewCard } from '@/src/components/cards/OverviewCard';
import { ScreenContainer } from '@/src/components/common/ScreenContainer';
import { postsMock } from '@/src/data/mocks';

export function SocialScreen() {
  return (
    <ScreenContainer
      title="Vytra Social"
      subtitle="Feed da comunidade preparado para filtros, posts de corrida e conexao com o mapa do mundo.">
      <OverviewCard
        title="Feed mockado"
        description={`${postsMock.length} posts ja estruturados com usuario, corrida, curtidas, comentarios e ponto de extensao para Ver no Mundo.`}
      />
    </ScreenContainer>
  );
}
