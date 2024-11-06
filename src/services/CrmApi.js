// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const CrmApi = createApi({
  reducerPath: 'CrmApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777/' }),
  endpoints: (builder) => ({
    login: builder.query({
        query: ({user}) => ({
            url: `/login`,
            method: 'POST',
            body: user,
          }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = CrmApi