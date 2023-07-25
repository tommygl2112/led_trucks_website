import { useState, useEffect, useRef } from "react";
import "../style/graphs.scss";

function AnimatedNumber({ bar, index, animateOne }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [animated, setAnimated] = useState(false);
  const finalValue = bar.value;
  const duration = 1000;
  const steps = 50;
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          let currentNumber = 0;
          let stepNumber = finalValue / steps;
          let stepDuration = duration / steps;
          let timer;

          function updateNumber() {
            currentNumber += stepNumber;
            if (currentNumber >= finalValue) {
              clearInterval(timer);
              currentNumber = finalValue;
              setAnimated(true);
            }
            setCurrentValue(Math.round(currentNumber));
          }

          timer = setInterval(updateNumber, stepDuration);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [finalValue, animated]);

  return (<text className="values" ref={containerRef} x={10 + 12*index} y="5" textAnchor="middle" key={"percent"+index}>
            {currentValue + " %"}
         </text>);
}

export default  AnimatedNumber;