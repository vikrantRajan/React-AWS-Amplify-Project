import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import authReducer from './slices/auth/auth.slice';


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})
sagaMiddleware.run(watcherSaga)
export default store