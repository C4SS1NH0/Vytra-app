import { MockProfileRepository } from '@/src/data/repositories';
import { RunProps } from '@/src/types/entities';
import { formatDurationMinutes, formatKm } from '@/src/utils/formatters';

const profileRepository = new MockProfileRepository();

function getBestPace(runs: RunProps[]) {
  return [...runs].sort((left, right) => left.pace.localeCompare(right.pace))[0]?.pace ?? '--';
}

export function useProfileData() {
  const currentUser = profileRepository.getCurrentUser();
  const runs = profileRepository.getRunsByUser(currentUser.id);
  const elo = profileRepository.getElo();

  const totalDistance = runs.reduce((total, run) => total + run.distanceKm, 0);
  const totalDuration = runs.reduce((total, run) => total + run.durationMinutes, 0);
  const longestRun = [...runs].sort((left, right) => right.distanceKm - left.distanceKm)[0];
  const highestSparkRun = [...runs].sort((left, right) => right.sparksEarned - left.sparksEarned)[0];

  const profileFacts = [
    { label: 'Peso', value: `${currentUser.weightKg} kg` },
    { label: 'Altura', value: `${currentUser.heightCm} cm` },
    { label: 'Streak semanal', value: `${currentUser.streak} dias` },
  ];

  const profileMetrics = [
    { label: 'Carteira Sparks', value: `${currentUser.sparks}`, helper: 'Saldo pronto para eventos e recompensas.' },
    { label: 'Volume recente', value: formatKm(totalDistance), helper: `${runs.length} corridas registradas no historico local.` },
    { label: 'Tempo acumulado', value: formatDurationMinutes(totalDuration), helper: 'Soma de tempo nas corridas mockadas do perfil.' },
  ];

  const records = [
    {
      label: 'Maior distancia',
      value: longestRun ? formatKm(longestRun.distanceKm) : '--',
      helper: longestRun ? `Concluida em ${formatDurationMinutes(longestRun.durationMinutes)}.` : 'Sem corridas ainda.',
    },
    {
      label: 'Melhor pace',
      value: getBestPace(runs),
      helper: 'Melhor ritmo registrado nesta base local.',
    },
    {
      label: 'Maior ganho de Sparks',
      value: highestSparkRun ? `${highestSparkRun.sparksEarned} Sparks` : '--',
      helper: highestSparkRun ? `Gerado em uma corrida de ${formatKm(highestSparkRun.distanceKm)}.` : 'Sem corridas ainda.',
    },
  ];

  return {
    currentUser,
    runs,
    elo,
    profileFacts,
    profileMetrics,
    records,
  };
}
