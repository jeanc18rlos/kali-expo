import React from 'react';

const activityState = (Variables, setGlobalVariableValue) => {
  const { todayStepsCount, yesterdayStepsCount, isStepTrackerAvailable } =
    Variables;

  const setTodayStepsCount = value =>
    setGlobalVariableValue({ key: 'todayStepsCount', value });
  const setYesterdayStepsCount = value =>
    setGlobalVariableValue({ key: 'yesterdayStepsCount', value });
  const setIsStepTrackerAvailable = value =>
    setGlobalVariableValue({ key: 'isStepTrackerAvailable', value });

  return {
    todayStepsCount,
    yesterdayStepsCount,
    isStepTrackerAvailable,
    setTodayStepsCount,
    setYesterdayStepsCount,
    setIsStepTrackerAvailable,
  };
};

export default activityState;
