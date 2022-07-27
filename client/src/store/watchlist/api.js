import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectShow } from "./slice";

const API_BASEURL = "/api/watchlist";

const watchlistApi = createApi({
  reducerPath: "watchlistApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASEURL }),
  tagTypes: ["Watchlist"],
  endpoints: (builder) => ({
    fetchWatchlist: builder.query({
      query: () => "/",
      providesTags: (result) => {
        if (result && result.length) {
          return [
            ...result.map(({ id }) => ({ type: "Watchlist", id })),
            { type: "Watchlist", id: "LIST" },
          ];
        }
        return [{ type: "Watchlist", id: "LIST" }];
      },
    }),
    fetchShow: builder.query({
      query: (showId) => `/${showId}`,
      providesTags: (result, error, showId) => [{ type: "Watchlist", showId }],
    }),
    addShow: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Watchlist", id: "LIST" }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(selectShow(data?.insertedId));
        } catch (error) {
          console.error(error?.message);
        }
      },
    }),
    updateShow: builder.mutation({
      query: ({ showId, ...body }) => ({
        url: `/${showId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { showId }) => [
        { type: "Watchlist", showId },
      ],
    }),
    deleteShow: builder.mutation({
      query: (showId) => ({
        url: `/${showId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, showId) => [
        { type: "Watchlist", showId },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(selectShow());
        } catch (error) {
          console.error(error?.message);
        }
      },
    }),
  }),
});

export const {
  useFetchWatchlistQuery,
  useFetchShowQuery,
  useAddShowMutation,
  useUpdateShowMutation,
  useDeleteShowMutation,
} = watchlistApi;

export default watchlistApi;
