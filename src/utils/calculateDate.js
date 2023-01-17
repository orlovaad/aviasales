export function timeArival(date, duration) {
  return new Date(Date.parse(date) + duration * 60000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function timeDeparture(date) {
  return new Date(Date.parse(date)).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}
