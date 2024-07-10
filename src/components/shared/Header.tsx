"use client";

import { logout } from "@/redux/features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { navLinks, profileNavlinks } from "@/utils/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Header = () => {
  const location = usePathname();
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout(undefined));
  };

  return (
    <header className="py-5 lg:py-7 border-b sticky top-0 z-50 bg-white ">
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
              className={`text-slate-700 hover:text-green-500 ${
                location === nav.path && "font-extrabold text-green-600"
              }`}
            >
              {nav.route}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3 items-center">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full h-[35px] w-[35px] p-[21px]"
                >
                  <Avatar className="h-[35px] w-[35px]">
                    <AvatarImage src={user.picture || "/svg/userIcon.svg"} />
                    <AvatarFallback>image</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2">
                  <Avatar className="h-[35px] w-[35px]">
                    <AvatarImage src={user.picture || "/svg/userIcon.svg"} />
                    <AvatarFallback>image</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5 leading-none">
                    <div className="font-semibold">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {user.email}
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator />

                {profileNavlinks.map(({ lebel, path, Icon }, i) => (
                  <>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      key={i + "links"}
                    >
                      <Link
                        href={path}
                        className="flex items-center gap-2 pl-[16px]"
                        prefetch={false}
                      >
                        <span className="flex items-center justify-start gap-[8px]">
                          <Icon className="text-[16px]" />
                          <span>{lebel}</span>
                        </span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                ))}

                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleLogout}
                >
                  <button className="flex items-center gap-2 pl-[16px]">
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" className="text-slate-700 hover:text-green-500">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
