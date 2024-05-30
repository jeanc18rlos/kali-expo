import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";

const useStepCount = () => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount((result) => {
        setCurrentStepCount(result.steps);
      });
    }
  };
  useEffect(() => {
    const subscription = subscribe();
    return () => {
      if (subscription) {
        subscription.then((sub) => sub && sub.remove());
      }
    };
  }, []);

  return { currentStepCount, pastStepCount, isPedometerAvailable };
};

export default useStepCount;
