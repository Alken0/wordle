import { combineReducers, configureStore } from '@reduxjs/toolkit'

import woerdelReducer from './slices/woerdelSlice'

import { composeWithDevTools } from "redux-devtools-extension"

export const rootReducer = combineReducers({
  woerdel: woerdelReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: { warnAfter: 90 },
      }),
  enhancers: composeWithDevTools({})
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;