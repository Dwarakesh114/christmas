import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import FireworkContainer from './components/FireworkContainer';
import SnowEffect from './components/SnowEffect';
import Mountains from './components/Scenery/Mountains';
import Trees from './components/Scenery/Trees';
import './styles/fireworks.css';
import './styles/snow.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 flex flex-col items-center justify-center relative overflow-hidden">
      <FireworkContainer />
      <SnowEffect />
      <Mountains />
      <Trees />
      
      <div className="text-center z-10 bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl max-w-4xl w-11/12">
        <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-8 filter drop-shadow-lg">
          Christmas Countdown 2024
        </h1>
        
        <CountdownTimer />
        
        <div className="mt-8 text-white text-lg md:text-xl">
          <p className="mb-2">🎄 Get ready for the magic of Christmas! 🎄</p>
          <p>Time to spread joy and cheer!</p>
        </div>
      </div>
    </div>
  );
}