import { call, put } from "redux-saga/effects";
import { signInFailure, signInSuccess } from "../../slices/auth/auth.slice";
import { requestSignIn } from "../requests/authSignIn.request";

export function* handleSignIn(action) {
    try {
        const response = yield call(requestSignIn, action.payload)
        yield put(signInSuccess(response))
    } catch (err) {
        console.log(err)
        yield put(signInFailure(`error source: signInFailure -> message: ${err.toString()}`))
        // throw new Error(err)
    }
}