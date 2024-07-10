import { api } from "@/redux/api/appSlice";

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
  }),
});
export const { useRegisterMutation } = userApi;
