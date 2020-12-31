import { take, fork, cancel, call, put,takeLatest } from 'redux-saga/effects'
// Our login actiontypes
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../actionTypes/login.actiontypes'

// So that we can modify our User piece of state
import {
  setUSER,
  unsetUSER,
} from '../actions/user.action'

//Utils
import { setToken, unsetToken } from '../utils/token';
import { postRequest } from '../utils/request'
import { USER_UNSET } from '../actionTypes/user.actiontypes'
import {navigate} from '../utils/navigate';

const loginUrl = 'http://p1.tanca.vn/api/auth/login';

function* logout() {
  // dispatches the User_UNSET action
  console.log('LOG OUT')
  yield put(unsetUSER())
  navigate('AuthStack')
}

function* loginFlow(name, phone_number) {

  try {
    const res = yield call(postRequest, loginUrl, {
      name,
      phone_number
    });
    yield console.log(`Reponse:${res}`);

    const { data } = res;

    yield console.log(`Token:${token}`);

    yield put(setUSER(data));

    setToken(data.token);

    yield put({ type: LOGIN_SUCCESS});

    navigate('Home')

  } catch (error) {
console.log(error)

    yield put({ type: LOGIN_ERROR, error })

  }

  // return the token 
  return token
}


export function* loginWatchcer() {
  while (true) {
    console.log('Watching LOGIN')
    const { name, phone_number } = yield take(LOGIN_REQUESTING)
    console.log('Watched LOGIN')
    console.log({ name, phone_number })
    yield fork(loginFlow, name, phone_number)
    console.log('Watched LOGOUT')
    
  }
}

export function* logoutWatcher() {
  console.log('Watching LOG_OUT')
  yield takeLatest('LOG_OUT',logout)
}
