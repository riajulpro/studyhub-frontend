import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { setUser } from "../features/auth/auth.slice";

const url = process.env.NEXT_PUBLIC_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: url,
  prepareHeaders: (headers, { getState }) => {
    const token = Cookies.get("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  // credentials: 'include',
});

const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    try {
      const refreshToken = Cookies.get("refreshToken") || "";

      const res = await fetch(`${url}/auth/refreshToken`, {
        method: "POST",

        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      const data = await res.json();
      const token = data?.data?.accessToken || "";

      if (token) {
        // const user = (api.getState() as RootState).auth.user;
        // api.dispatch(setUser({ user, token: token }));
        result = await baseQuery(args, api, extraOptions);
      }
    } catch (error) {
      api.dispatch(setUser({ token: null, user: null }));
    }
  }
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["user"],
  endpoints: () => ({}),
});
