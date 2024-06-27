"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const movieApiHeaders = {
  "Content-Type": "application/json",
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const api_key = process.env.NEXT_PUBLIC_API_KEY;

const createRequest = (url) => ({ url, headers: movieApiHeaders });

export const movieApi = createApi({
  //TODO: to know what is this reducer for
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () =>
        createRequest(`trending/all/week?api_key=${api_key}&language=en-us`),
    }),
    getNetflixOriginals: builder.query({
      query: () =>
        createRequest(`discover/tv?api_key=${api_key}&with_networks=213`),
    }),
    getTopRated: builder.query({
      query: () =>
        createRequest(`movie/top_rated?api_key=${api_key}&language=en-us`),
    }),
    getActionMovies: builder.query({
      query: () =>
        createRequest(`discover/movie?api_key=${api_key}&with_genres=28`),
    }),
    getComedyMovies: builder.query({
      query: () =>
        createRequest(`discover/movie?api_key=${api_key}&with_genres=35`),
    }),
    getHorrorMovies: builder.query({
      query: () =>
        createRequest(`discover/movie?api_key=${api_key}&with_genres=27`),
    }),
    getRomanceMovies: builder.query({
      query: () =>
        createRequest(`discover/movie?api_key=${api_key}&with_genres=10749`),
    }),
    getSciFiMovies: builder.query({
      query: () =>
        createRequest(`discover/movie?api_key=${api_key}&with_genres=878`),
    }),
    getCrimeMovies: builder.query({
      query: () =>
        createRequest(`discover/movie?api_key=${api_key}&with_genres=80`),
    }),
  }),
});

 const {
  useGetTrendingQuery,
  useGetNetflixOriginalsQuery,
  useGetTopRatedQuery,
  useGetActionMoviesQuery,
  useGetComedyMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetSciFiMoviesQuery,
  useGetCrimeMoviesQuery,
} = movieApi;
