const initialState = [];

export default function participantsListReducer(state = initialState, action) {
  // console.log('participantsListReducer :)');
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_LIST':
      return [...state, action.payload];
    default:
      return state;
  }
}
