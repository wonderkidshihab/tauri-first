import { useEffect, useState } from "react";
interface ClockProps {
  hour: number;
  minute: number;
  second: number;
}

function App() {
  const [time, setTime] = useState<ClockProps>({
    hour: 0,
    minute: 0,
    second: 0,
  });
  const updateTime = async () => {
    try {
      const time = new Date();
      setTime({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateTime();
    setInterval(() => {
      updateTime();
    }, 1000);
  }, []);
  return (
    <div style={
      {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
      <svg height={'100%'} width={'100%'}>
        <circle cx="50%" cy="50%" r="100%" fill="black" />
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          fill="none"
          stroke="white"
          strokeWidth="2%"
        />
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="10%"
          stroke="white"
          strokeWidth="2%"
        />
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="20%"
          stroke="white"
          strokeWidth="2%"
          transform={`rotate(${time!.hour * 30}deg)`}
        />
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="30%"
          stroke="white"
          strokeWidth="2%"
          transform={`rotate(${time!.minute * 6}deg)`}
        />
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="40%"
          stroke="red"
          strokeWidth="2%"
          rotate={1.5}
        />
        <circle cx="50%" cy="50%" r="2%" fill="white" />
      </svg>
    </div>
  );
}

export default App;
