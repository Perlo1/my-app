import React, { useState, useEffect } from "react";

export function Clock() {
  const [currentTime, setCurrentTime] = useState(nowDate());

  function nowDate() {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(nowDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2>Current time is {currentTime}</h2>;
}
