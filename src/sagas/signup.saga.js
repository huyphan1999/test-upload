import { call, put, takeLatest } from 'redux-saga/effects'
import {
    SIGNUP_REQUESTING,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
} from '../actionTypes/signup.actiontypes'

import {
    setUSER,
  } from '../actions/user.action'

import { postRequest } from '../utils/request'
import { navigate } from '../utils/navigate';


const signupUrl = 'http://p1.tanca.vn/api/shop/register'

function* signupFlow(action) {
    try {
        const { name, phone_number } = action

        const res = yield call(postRequest, signupUrl, {
            name,
            phone_number,
            name:'1237@gmail.com'
        });
        const { data } = res;
        yield put(setUSER(data))
        navigate('Home')
        yield put({ type: SIGNUP_SUCCESS })

    } catch (error) {
        console.log(error)
        yield put({ type: SIGNUP_ERROR, error })
    }
}

export function* signupWatcher() {
    console.log('Watching SIGNUP')
    yield takeLatest(SIGNUP_REQUESTING, signupFlow)
}

