const initialState = {
  loading: false,
  events: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPLETE":
      return { ...state, events: [...state.events, action.payload] };
    case "LOADING_COMPLETE":
      return { ...state, events: [...action.payload] };
    case "COMING_COMPLETE":
      return {...state, events: state.events.map(event => {if (event._id === action.payload){event.favorites = 'true'} return event })}
    default:
      return state;
  }
};