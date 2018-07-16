export default function contentReducers(state = {
  defaultData: {}
}, action) {
  switch (action.type) {
    case 'HOME_ACTION_TYPE': {
      return Object.assign({}, state, { defaultData: action.data});
    }

    default:
      return state;
  }
}
