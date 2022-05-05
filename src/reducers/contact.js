import { FETCH_CONTACTS, ADD_MESSAGE } from '../actions/actionTypes';
const initialState = {
  contacts: [],
};
export default function contacts(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
      };
    case ADD_MESSAGE:
      const updatedcontacts = [...state.contacts];

      const user = updatedcontacts.find(
        (contact) => contact.id === action.userId
      );
      user.chatlog.push(action.message);
      return {
        ...state,
        contacts: [...updatedcontacts],
      };
    default:
      return state;
  }
}
