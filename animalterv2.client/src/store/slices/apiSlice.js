import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animalApi = createApi({
  reducerPath: 'animalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8641/',
  }),

  endpoints: (builder) => ({
    getTypes: builder.query({ query: () => 'Typee' }),
    getAnimalById: builder.query({ query: (id) => `v1/charts/genre-world?genre_code=${id}` }),
    getAnimalByType: builder.query({ query: (type) => `v1/charts/country?country_code=${type}` }),
    getAnimalByGenus: builder.query({ query: (genus) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${genus}` }),
    getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetTypesQuery,
  useGetAnimalByIdQuery,
  useGetAnimalByTypeQuery,
  useGetAnimalByGenusQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = animalApi;