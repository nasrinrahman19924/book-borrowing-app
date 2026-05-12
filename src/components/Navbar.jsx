"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">

          <h3 className="font-black text-lg">📚 BookApp</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-books"}>All Books</Link>
          </li>
          <li>
            <Link href={"/my-profile"}> My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-6">
          {!user && <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>}


          {
            user && <div>
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user?.image[0]}</Avatar.Fallback>
              </Avatar>
            </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;