import { all, takeLatest } from "redux-saga/effects";
import { handleSignIn } from "../sagas/handlers/authSignIn.handler";
import { handleValidate } from "../sagas/handlers/authValidate.handler";
import { signInFetch, validateUserFetch } from "../slices/auth/auth.slice";
export function* watcherSaga() {
    yield all([
        takeLatest(signInFetch.type, handleSignIn),
        takeLatest(validateUserFetch.type, handleValidate)
    ]) 
}