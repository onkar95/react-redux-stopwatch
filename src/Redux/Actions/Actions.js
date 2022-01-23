export const startTimer = () => {
  return {
    type: "START",
    
  };
};

export const pauseTimer = () => {
  return {
    type: "PAUSE",
  };
};

export const resumeTimer = () => {
  return {
    type: "RESUME",
  };
};

export const secondsTimer = (timer) => {
  return {
    type: "SECONDS",
    payload: {
      timer,
    },
  };
};

export const resetTimer = () => {
  return {
    type: "RESET",
  };
};

export const lapTimer = () => {
  return {
    type: "LAPS",
  };
};
