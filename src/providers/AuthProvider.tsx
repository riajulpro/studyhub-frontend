// "use client";
// import Loader from "@/components/shared/Loader";
// import { useGetAuthorQuery } from "@/redux/features/auth/auth.api";
// import { initialState, setUser } from "@/redux/features/user/userSlice";
// import Cookies from "js-cookie";
// import React from "react";
// import { useDispatch } from "react-redux";
// const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const token = Cookies.get("accessToken");

//   const { data, isSuccess, isError, isLoading } = useGetAuthorQuery(
//     token || ""
//   );

//   // console.log("aauthtt dataa", data);

//   const dispatch = useDispatch();

//   // if (isLoading) {
//   //   return (
//   //     <div className="w-screen h-screen center">
//   //       <Loader />
//   //     </div>
//   //   );
//   // }

//   if (isSuccess) {
//     dispatch(setUser(data?.data || initialState));
//   }

//   return <>{children}</>;
// };

// export default AuthProvider;
