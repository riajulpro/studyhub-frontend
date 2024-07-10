"use client";
import { useGetAuthorQuery } from "@/redux/features/auth/auth.api";
import { setUser } from "@/redux/features/auth/auth.slice";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get("accessToken");

  const { data, isSuccess, isError, isLoading } = useGetAuthorQuery(
    token || ""
  );

  const dispatch = useDispatch();

  // if (isLoading) {
  //   return (
  //     <div className="w-screen h-screen center">
  //       <Loader />
  //     </div>
  //   );
  // }

  if (isSuccess) {
    dispatch(setUser(data?.data || null));
  }

  return <>{children}</>;
};

export default AuthProvider;
