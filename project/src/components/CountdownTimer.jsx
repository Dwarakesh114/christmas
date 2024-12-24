import React from 'react';
import TimeUnit from './TimeUnit';
import useCountdown from '../hooks/useCountdown';
import GreetingCard from './GreetingCard/GreetingCard';

export default function CountdownTimer() {
  const { timeLeft, isComplete } = useCountdown();

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      {isComplete && <GreetingCard />}
    </>
  );
}