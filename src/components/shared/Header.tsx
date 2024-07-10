"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hook";
import { navLinks } from "@/utils/navLinks";

const Header = () => {
  const location = usePathname();
  // const { user, token } = useAppSelector((state) => state.auth);

  const token = "yes"

  return (
    <header className="py-5 lg:py-7 sticky top-0 z-50 bg-white ">
      <div className="layout_container  flex justify-between gap-4 items-center">
        <div className="flex items-center gap-2">
          {/* <LeftSidebar /> */}
          <span className="text-lg font-bold">StudyHub</span>
        </div>
        <nav className="hidden lg:flex gap-5 items-center">
          {navLinks.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`text-slate-700 hover:text-coralMat btn-style ${
                location === nav.path && "font-extrabold text-coralMat"
              }`}
            >
              {nav.route}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3 items-center">
          {token ? (
            <div className="text-slate-700 hover:text-green-500 btn-style">Log Out</div>
          ) : (
            <Link href="/login" className="text-slate-700 hover:text-green-500 btn-style">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
