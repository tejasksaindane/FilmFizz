"use client"

import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./Services/MovieApi"


export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        movieApi.middleware,
      //   cryptoNewsApi.middleware
      ),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;