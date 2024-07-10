import { api } from "@/redux/api/appSlice";
import { IUser } from "@/types/user";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create blog post
    register: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["user"],
    }),
    login: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["user"],
    }),
    getAuthor: builder.query<{ data: IUser }, string>({
      query: (token) => {
        return {
          url: `/auth/auth-state`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation,useGetAuthorQuery } = userApi;
