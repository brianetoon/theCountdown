import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const date = ["Days", "Hours", "Min", "Sec"]


  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })


  const targetDate = new Date('March 21, 2025 09:00:00 GMT-0600').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diffTime = targetDate - now;

    return {
      days: Math.floor(diffTime / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diffTime / (1000 * 60 * 60)) % 24),
      min: Math.floor((diffTime / (1000 * 60)) % 60),
      sec: Math.floor((diffTime / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  console.log(timeLeft)
  return (
    <div className="wires" style={{
      width: dimensions.width,
      height: dimensions.height
    }}>
      <div className="countdown-container">
        <div className="countdown-header">
          <h1>Countdown Until : 21/03/2025 </h1>

        </div>
        <div className="countdown-display">
          <div className='arrange'>

            {
              date.flatMap((counter, index) => {
                return [

                  <CounterDisplay
                    key={counter}
                    lableName={counter}
                    value={timeLeft[counter.toLowerCase()]}
                    size={dimensions.width}
                  />
                  ,
                  index !== date.length - 1 && <CounterDisplay
                    key={index}
                    lableName={""}
                    value={":"}
                    size={dimensions.width}
                  />

                ]


              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function CounterDisplay({ lableName, value, size }) {
  return <div className='cell'>
    <label className="label" >{lableName}</label>
    <div className='section'>
      <div className="digit">{value}</div>
    </div>
  </div>
}

export default App
