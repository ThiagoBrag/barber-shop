import {
  combineReducers,
  configureStore,
  type AnyAction,
} from '@reduxjs/toolkit';
import UserConfigReducer from './UserConfig/UserConfigReducer';

const appReducer = combineReducers({
  userConfig: UserConfigReducer,
});

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: AnyAction,
) => {
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
