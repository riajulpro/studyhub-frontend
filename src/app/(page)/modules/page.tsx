"use client";
import { useAppSelector } from "@/redux/hook";
import ModuleView from "@/views/ModulesView";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Page = () => {
  const { user, loading } = useAppSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      Cookies.set("redirect", "/modules");
      return router.push("/login");
    }
  });
  return <ModuleView />;
};

export default Page;
