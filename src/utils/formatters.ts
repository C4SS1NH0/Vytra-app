export function formatCompactNumber(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }

  return `${value}`;
}

export function formatKm(value: number) {
  return `${value.toFixed(1)} km`;
}
