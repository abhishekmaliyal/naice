"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const timeContext = createContext({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  inHours: 0,
  inMinutes: 0,
  inSeconds: 0,
});

export default function TimeProvider({ children }) {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    inHours: 0,
    inMinutes: 0,
    inSeconds: 0,
  });

  useEffect(() => {
    function calculateRemainingTime() {
      const futureUTCSeconds = 6969696969;
      const currentUTCSeconds = Math.floor(Date.now() / 1000);

      let remainingSeconds = futureUTCSeconds - currentUTCSeconds;
      if (remainingSeconds <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          inHours: 0,
          inMinutes: 0,
          inSeconds: 0,
        };
      }

      const days = Math.floor(remainingSeconds / (60 * 60 * 24));
      remainingSeconds -= days * 60 * 60 * 24;
      const hours = Math.floor(remainingSeconds / (60 * 60));
      remainingSeconds -= hours * 60 * 60;
      const minutes = Math.floor(remainingSeconds / 60);
      remainingSeconds -= minutes * 60;
      const seconds = Math.floor(remainingSeconds);

      const inHours = days * 24 + hours;
      const inMinutes = inHours * 60 + minutes;
      const inSeconds = inMinutes * 60 + seconds;

      return {
        days,
        hours,
        minutes,
        seconds,
        inHours,
        inMinutes,
        inSeconds,
      };
    }

    const timer = setInterval(() => {
      setTimeRemaining(calculateRemainingTime());
    }, 1000);

    setTimeRemaining(calculateRemainingTime());

    return () => clearInterval(timer);
  }, []);

  return <timeContext.Provider value={timeRemaining}>{children}</timeContext.Provider>;
}

export const useTime = () => useContext(timeContext);
