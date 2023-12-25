import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animalApi = createApi({
  reducerPath: 'animalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5013/',
  }),

  endpoints: (builder) => ({
    getTypes: builder.query({ query: () => 'Typee' }),
    getAnimalById: builder.query({ query: (id) => `Animal/GetAnimalById?Id=${id}` }),
    getAnimalByType: builder.query({ query: (type) => `v1/charts/country?country_code=${type}` }),
    getAnimalByGenus: builder.query({ query: (genus) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${genus}` }),
    getAnimals: builder.query({ query: () => `Animal` }),
    getUsers: builder.query({ query: ({ songid }) => `Customer` }),
    getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetTypesQuery,
  useGetAnimalByIdQuery,
  useGetAnimalByTypeQuery,
  useGetAnimalByGenusQuery,
  useGetAnimalsQuery,
  useGetUsersQuery,
  useGetSongRelatedQuery,
} = animalApi;