import { call, put } from "redux-saga/effects";
import { signInFailure, signInSuccess } from "../../slices/auth/auth.slice";
import { requestSignIn } from "../requests/authSignIn.request";

export function* handleSignIn(action) {
    try {
        const response = yield call(requestSignIn, action.payload)
        yield put(signInSuccess(response))
    } catch (err) {
        yield put(signInFailure(`${err.toString()}`))
    }
}