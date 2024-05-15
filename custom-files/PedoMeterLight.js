import { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import * as GlobalVariableContext from '../config/GlobalVariableContext';
import { Platform } from 'react-native';

export function Button() {
  const { todayStepsCount, yesterdayStepsCount, isStepTrackerAvailable } =
    GlobalVariableContext.useValues();

  const setGlobalVariable = GlobalVariableContext.useSetValue();

  const setTodayStepsCount = value =>
    setGlobalVariable({ key: 'todayStepsCount', value });

  const setYesterdayStepsCount = value =>
    setGlobalVariable({ key: 'yesterdayStepsCount', value });

  const setIsStepTrackerAvailable = value =>
    setGlobalVariable({ key: 'isStepTrackerAvailable', value });

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsStepTrackerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setYesterdayStepsCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setTodayStepsCount(result.steps);
      });
    }
  };

  useEffect(() => {
    if (Platform.OS !== 'web') {
      const subscription = subscribe();
      return () => subscription && subscription.remove();
    }
  }, []);

  return <></>;
}
