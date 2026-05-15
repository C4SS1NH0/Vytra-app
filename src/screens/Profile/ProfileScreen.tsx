import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { IntegrationCard } from '@/src/components/cards/IntegrationCard';
import { MetricCard } from '@/src/components/cards/MetricCard';
import { ScreenContainer } from '@/src/components/common/ScreenContainer';
import { SectionHeader } from '@/src/components/common/SectionHeader';
import { EloCard } from '@/src/components/profile/EloCard';
import { ProfileFactsCard } from '@/src/components/profile/ProfileFactsCard';
import { ProfileHeaderCard } from '@/src/components/profile/ProfileHeaderCard';
import { ProfileTabValue, ProfileTabs } from '@/src/components/profile/ProfileTabs';
import { RecordCard } from '@/src/components/profile/RecordCard';
import { RunHistoryCard } from '@/src/components/profile/RunHistoryCard';
import { useProfileData } from '@/src/screens/Profile/useProfileData';
import { theme } from '@/src/theme';

export function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<ProfileTabValue>('profile');
  const { currentUser, runs, elo, profileFacts, profileMetrics, records } = useProfileData();

  return (
    <ScreenContainer
      title="Perfil"
      subtitle="Base do perfil pronta para receber bio, metricas, carteira Sparks, recordes e conexoes externas.">
      <ProfileHeaderCard user={currentUser} />

      <View style={styles.metricsGrid}>
        {profileMetrics.map((metric, index) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            helper={metric.helper}
            accent={index === 0 ? 'primary' : index === 1 ? 'accent' : 'info'}
          />
        ))}
      </View>

      <ProfileTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'profile' ? (
        <View style={styles.section}>
          <ProfileFactsCard facts={profileFacts} />
          <EloCard elo={elo} />
          <SectionHeader
            eyebrow="Integracoes"
            title="Conecte sua rotina"
            caption="Espacos prontos para sincronizar corridas, saude e progresso automatico."
          />
          <View style={styles.integrationGrid}>
            <IntegrationCard
              badge="STRAVA"
              title="Conectar Strava"
              description="Importe atividades, rotas e consistencia semanal para o perfil."
            />
            <IntegrationCard
              badge="APPLE HEALTH"
              title="Conectar Apple Health"
              description="Centralize saude, passos e historico fisico em uma unica camada."
            />
          </View>
        </View>
      ) : null}

      {activeTab === 'runs' ? (
        <View style={styles.section}>
          {runs.map((run) => (
            <RunHistoryCard key={run.id} run={run} />
          ))}
        </View>
      ) : null}

      {activeTab === 'records' ? (
        <View style={styles.section}>
          {records.map((record) => (
            <RecordCard
              key={record.label}
              label={record.label}
              value={record.value}
              helper={record.helper}
            />
          ))}
        </View>
      ) : null}
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
  section: {
    gap: theme.spacing.md,
  },
});
