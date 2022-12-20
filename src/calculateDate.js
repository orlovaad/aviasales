export function calculateNewDate(date, duration) {
  return new Date(Date.parse(date) + duration * 60000);
}

export function calculateDate(date) {
  return new Date(Date.parse(date));
}
