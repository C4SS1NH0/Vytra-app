import { OverviewCard } from '@/src/components/cards/OverviewCard';
import { ScreenContainer } from '@/src/components/common/ScreenContainer';
import { worldPinsMock } from '@/src/data/mocks';

export function WorldScreen() {
  return (
    <ScreenContainer
      title="Vytra World"
      subtitle="Estrutura inicial do mapa holografico com pins, ranking e estatisticas semanais.">
      <OverviewCard
        title="Mundo conectado"
        description={`${worldPinsMock.length} pins mockados prontos para evoluir para um mapa interativo com localizacao aproximada.`}
      />
      <OverviewCard
        title="Privacidade preservada"
        description="A estrutura do dominio ja separa cidade, estado e pais para evitar exibicao de coordenadas exatas ao usuario final."
      />
    </ScreenContainer>
  );
}
