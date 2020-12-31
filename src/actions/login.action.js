import {
  LOGIN_REQUESTING,
} from '../actionTypes/login.actiontypes'


export const loginRequest = function loginRequest({ name, phone_number }) {
  return {
    type: LOGIN_REQUESTING,
    name,
    phone_number,
  }
}
