const initialState = {
  timer: null,
  miliseconds: 0,
  seconds: 0,
  minutes: 0,
  start: false,
  laps: [],
  isClicked: false,
};

const timeReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "START":
      return {
        ...state,
        start: true,
        isClicked: true,
      };
    case "PAUSE":
      clearInterval(newState.timer);
      let timer=newState.timer
      return {
        ...state,
        timer,
        start: false,
      };
    case "RESUME":
      return {
        ...state,
        start: true,
      };
    case "LAPS":

      newState.laps.push([
        newState.minutes,
        newState.seconds,
        newState.miliseconds,
      ]);
      return newState;
    case "SECONDS":
      newState.timer = action.payload.timer
      newState.miliseconds++;
      if (newState.miliseconds > 99) {
        newState.miliseconds = 0;
        newState.seconds++;
        if (newState.seconds > 59) {
          newState.seconds = 0;
          newState.minutes++;
        }
      }
      return newState;
    case "RESET":
     let laps = newState.laps;
      return {
        laps:[],
        miliseconds: 0,
        seconds: 0,
        minutes: 0,
            }
    default:
      return newState;
  }
};

export default timeReducer;
