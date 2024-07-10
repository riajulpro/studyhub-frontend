import { api } from "@/redux/api/appSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerPatient: builder.mutation({
      query: (post) => ({
        url: "/patient/create",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["user"],
    }),
   
  }),
});
export const {
  useRegisterPatientMutation,

} = authApi;
