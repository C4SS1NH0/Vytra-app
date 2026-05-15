export function formatCompactNumber(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }

  return `${value}`;
}

export function formatKm(value: number) {
  return `${value.toFixed(1)} km`;
}

export function formatDurationMinutes(value: number) {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  if (hours <= 0) {
    return `${minutes} min`;
  }

  return `${hours}h ${minutes.toString().padStart(2, '0')}min`;
}
