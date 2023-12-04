export function formatTimestamp(timestamp: string): string {
  const timestampInMilliseconds = parseInt(timestamp) * 1000;
  const date = new Date(timestampInMilliseconds);
  const hours = date.getHours() % 12 || 12;
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const ampm = date.getHours() < 12 ? "AM" : "PM";
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return formattedTime;
}
