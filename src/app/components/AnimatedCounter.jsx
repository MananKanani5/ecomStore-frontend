"use client";
import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ targetNumber, duration, className }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = targetNumber / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCurrentNumber(targetNumber);
        clearInterval(timer);
      } else {
        setCurrentNumber(Math.round(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [hasStarted, targetNumber, duration]);

  return (
    <div className={` ${className}`} ref={ref}>
      {currentNumber}+
    </div>
  );
};

export default AnimatedCounter;
