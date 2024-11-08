// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const CrmApi = createApi({
  reducerPath: 'CrmApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777/' }),
  endpoints: (builder) => ({
    
    login: builder.mutation({
        query: (user) => ({
            url: `/login`,
            method: 'POST',
            body: user,
          }),
    }),
    signup: builder.mutation({
      query: (user) => ({
          url: `/signup`,
          method: 'POST',
          body: user,
        }),
    }),
    addLeads: builder.mutation({
      query: (lead) => ({
          url: `/addlead`,
          headers:{
            "authorization":window.localStorage.getItem("token")
          },
          method: 'POST',
          body: lead,
        }),
    }),
    delLeads: builder.mutation({
      query: (id) => ({
          url: `/deletelead/${id}`,
          method: 'DELETE',
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        }),
    }),
    editLeads: builder.mutation({
      query: (id) => ({
          url: `/addremark/${id}`,
          method: 'PUT',
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        }),
    }),
    aboutLeads: builder.query({
      query: (id) => ({
          url: `/leaddetails/${id}`,
          headers:{
            "authorization":window.localStorage.getItem("token")
          }
        }),
    }),
    getLeads:builder.query({
      query: ()=>({
        url:"",
        headers:{
          "authorization":window.localStorage.getItem("token")
        }
      })
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useLoginMutation,
  useSignupMutation,
  useGetLeadsQuery,
  useAddLeadsMutation,
  useDelLeadsMutation,
  useEditLeadsMutation,
  useAboutLeadsQuery,
 } = CrmApi