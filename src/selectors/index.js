export const getUserToken = state => state.user.token

export const getUser = state => state.user

export const getUserData = state => state.user.user


export const getData = (state,reducer,field) => state[reducer][field]
