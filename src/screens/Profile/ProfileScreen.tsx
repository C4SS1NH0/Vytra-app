import { OverviewCard } from '@/src/components/cards/OverviewCard';
import { ScreenContainer } from '@/src/components/common/ScreenContainer';
import { currentUserMock } from '@/src/data/mocks';

export function ProfileScreen() {
  return (
    <ScreenContainer
      title="Perfil"
      subtitle="Base do perfil pronta para receber bio, metricas, carteira Sparks, recordes e conexoes externas.">
      <OverviewCard
        title={currentUserMock.name}
        description={`${currentUserMock.username} com ${currentUserMock.followers} apoiadores, ${currentUserMock.following} apoiando e ${currentUserMock.partners} parceiros.`}
      />
    </ScreenContainer>
  );
}
