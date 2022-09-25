import { call, put } from "redux-saga/effects";
import { validateUserFailure, validateUserSuccess } from "../../slices/auth/auth.slice";
import { requestValidate } from "../requests/authValidate.request";

export function* handleValidate(action) {
    try {
        const response = yield call(requestValidate, action.payload)
        yield put(validateUserSuccess(response))
    } catch (err) {
        console.log(err)
        yield put(validateUserFailure(`error source: handleValidate -> message: ${err.toString()}`))
        // throw new Error(err)
    }
}