import { combineReducers } from 'redux';
import contacts from './contact';

import user from './user';
export default combineReducers({ contacts, user });
