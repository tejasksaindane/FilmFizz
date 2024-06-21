import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./Services/MovieApi"

export default configureStore({
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

