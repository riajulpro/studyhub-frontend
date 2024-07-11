import { api } from "@/redux/api/appSlice";
import { ICourseResponse } from "@/types/module";

const moduleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create blog post
    getAllModules: builder.query<ICourseResponse, undefined>({
      query: () => ({
        url: "/module/get/all",
        method: "GET",
      }),
      providesTags: ["module"],
    }),
    getUserModuleProgress: builder.query<{ data: string[] | [] }, undefined>({
      query: () => ({
        url: "/progress/get/module",
        method: "GET",
      }),
      providesTags: ["module"],
    }),
    getUserLessonProgress: builder.query<{ data: string[] | [] }, undefined>({
      query: () => ({
        url: "/progress/get/lesson",
        method: "GET",
      }),
      providesTags: ["module"],
    }),
  }),
});
export const {
  useGetAllModulesQuery,
  useGetUserModuleProgressQuery,
  useGetUserLessonProgressQuery,
} = moduleApi;
