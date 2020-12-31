import { all } from 'redux-saga/effects';
import { inWatcher } from './in.saga';
import { watchAppInitial } from './app.saga';
import { loginWatchcer,logoutWatcher } from './login.saga';
import { signupWatcher } from './signup.saga';
import { timekeepWatcher } from './timekeep.saga';
import { calendarWatcher } from './calendar.saga';
import { postEmpWatchcer, getEmpWatchcer } from './emp.saga';
import { postDeptWatchcer, getDeptWatchcer } from './dept.saga';
import { postPosWatchcer, getPosWatchcer } from './position.saga';
import { getShiftWatchcer, postShiftWatchcer } from './shift.saga';
import { postBranchWatchcer, getBranchWatchcer } from './branch.saga';

function* rootSaga() {
  yield all([
    //    In/out saga
    inWatcher(),


    //    Auth saga
    loginWatchcer(),signupWatcher(),

    watchAppInitial(),logoutWatcher(),


    //   Attendance saga

     timekeepWatcher(), 


     //  Calendar saga

     calendarWatcher(),


    //    Company saga

    postDeptWatchcer(), getDeptWatchcer(),

    postPosWatchcer(),  getPosWatchcer(),

    postBranchWatchcer(), getBranchWatchcer(),


    //    Shift saga

    getShiftWatchcer(), postShiftWatchcer(),


    //    Employee saga

    postEmpWatchcer(), getEmpWatchcer(),
    
  ])
}
export default rootSaga;
