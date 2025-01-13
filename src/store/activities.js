const initialState = {
  activities: [
    { id: 1, name: "Mandi" },
    { id: 2, name: "Sarapan" },
    { id: 3, name: "Coding" },
  ],
};

export const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ACTIVITY":
      return {
        ...state,
        activities: [
          ...state.activities,
          { id: action.payload.id, name: action.payload.name },
        ],
      };
    case "REMOVE_ACTIVITY":
      return {
        ...state,
        activities: state.activities.filter((activity) => activity.id !== action.payload),
      };
    case "EDIT_ACTIVITY":
      return {
        ...state,
        activities: state.activities.map((activity) =>
          activity.id === action.payload.id
            ? { ...activity, name: action.payload.name }
            : activity
        ),
      };
    default:
      return state;
  }
};
