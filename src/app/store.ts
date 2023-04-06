import {
  configureStore,
  type ThunkAction,
  type Action,
  combineReducers,
} from "@reduxjs/toolkit";
import productReducer from "./../reducers/productSlice";
import orderReducer from "./../reducers/orderSlice";

const rootReducer = combineReducers({
  productReducer,
  orderReducer,
});

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
