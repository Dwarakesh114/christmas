import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export function getTimeLeft() {
  const christmas = new Date(2024, 11, 25); // Month is 0-based, so 11 is December
  const now = new Date();

  return {
    days: differenceInDays(christmas, now),
    hours: differenceInHours(christmas, now) % 24,
    minutes: differenceInMinutes(christmas, now) % 60,
    seconds: differenceInSeconds(christmas, now) % 60
  };
}