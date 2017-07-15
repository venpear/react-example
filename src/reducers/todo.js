import update from 'react/lib/update';
export default function todo(state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'UPDATE_TODO':
      return update(state, {
        [action.idx]: {
          $merge: {
            complated: action.checked
          }
        }
      })
    default:
      return state;
  }
}