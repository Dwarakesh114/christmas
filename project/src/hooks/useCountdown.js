import { useState, useEffect } from 'react';
import { getTimeLeft } from '../utils/dateUtils';

export default function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = getTimeLeft();
      setTimeLeft(newTimeLeft);

      // Check if countdown is complete
      if (Object.values(newTimeLeft).every(value => value <= 0)) {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { timeLeft, isComplete };
}