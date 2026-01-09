const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const formatRelativeTime = (timestamp: number): string => {
  const now = Date.now();
  const diff = timestamp - now;
  const minutes = Math.round(diff / 60000);
  if (Math.abs(minutes) < 60) {
    return rtf.format(minutes, 'minute');
  }
  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) {
    return rtf.format(hours, 'hour');
  }
  const days = Math.round(hours / 24);
  return rtf.format(days, 'day');
};

export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
  });
};
