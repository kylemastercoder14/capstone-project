export function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  return date.toLocaleDateString('en-US', options);
}
