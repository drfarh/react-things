import React, { useEffect, useState } from 'react';

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  }

export default function Clock() {
  const time = useTime();
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hours = time.getHours();
    setIsNight(hours >= 0 && hours < 6);
  }, [time]);

  return (
    <h1 className={isNight ? 'night' : 'day'}>
      {time.toLocaleTimeString()}
    </h1>
  );
}