import { ChallengeCard } from '@/src/components/cards/ChallengeCard';
import { EventCard } from '@/src/components/cards/EventCard';
import { IntegrationCard } from '@/src/components/cards/IntegrationCard';
import { MetricCard } from '@/src/components/cards/MetricCard';
import { RankingCard } from '@/src/components/cards/RankingCard';
import { ScreenContainer } from '@/src/components/common/ScreenContainer';
import { SectionHeader } from '@/src/components/common/SectionHeader';
import { StyleSheet, View } from 'react-native';

import { useHomeData } from '@/src/screens/Home/useHomeData';
import { theme } from '@/src/theme';

export function HomeScreen() {
  const { currentUser, featuredEvent, ranking, activeChallenges, metrics } = useHomeData();

  return (
    <ScreenContainer
      title={`Ola, ${currentUser.name.split(' ')[0]}`}
      subtitle="Seu hub semanal de energia, progresso e conexoes dentro do ecossistema Vytra.">
      <View style={styles.metricsGrid}>
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            helper={metric.helper}
            accent={metric.accent}
          />
        ))}
      </View>

      <SectionHeader
        eyebrow="Evento"
        title="Parceiro da semana"
        caption="Entre em experiencias presenciais usando Sparks acumulados nas suas corridas."
      />
      <EventCard event={featuredEvent} />

      <SectionHeader
        eyebrow="Integracoes"
        title="Conecte seu ecossistema"
        caption="Prepare a conta para importar saude, historico e progresso automaticamente."
      />
      <View style={styles.integrationGrid}>
        <IntegrationCard
          badge="STRAVA"
          title="Conectar Strava"
          description="Sincronize atividades, ritmo e distancia para alimentar o Vytra."
        />
        <IntegrationCard
          badge="APPLE HEALTH"
          title="Conectar Apple Health"
          description="Importe dados de saude, passos e corridas em uma camada centralizada."
        />
      </View>

      <SectionHeader
        eyebrow="Ranking"
        title="Top da semana"
        caption="Classificacao baseada em quilometragem total corrida durante a semana."
      />
      <RankingCard users={ranking} />

      <SectionHeader
        eyebrow="Desafios"
        title="Ativos agora"
        caption="Metas coletivas e pessoais prontas para evoluir para jornadas, premios e loops sociais."
      />
      <View style={styles.challengeList}>
        {activeChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  integrationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  challengeList: {
    gap: theme.spacing.md,
  },
});
