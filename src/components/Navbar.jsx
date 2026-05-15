"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { Avatar, Badge, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import {useRouter} from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const {
    data: session,
    isPending,
    error,
    refetch
  } = authClient.useSession();

  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      //force the navbar to realize quickly that the user is logged out
      await refetch();
      toast.success("Logged out successfully");
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className="fixed m-3 bg-black/30 backdrop-blur-md w-[98.5%] z-50">
    <nav className="  w-full shadow-sm h-20 flex items-center">
      <div className="grid grid-cols-3 items-center w-full mx-auto px-4 md:px-8">
        {/* Left Side: Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-base font-semibold text-[#18a0b5] border-b-2 border-[#18a0b5] pb-1"
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className="text-base font-normal text-white/80 hover:text-[#18a0b5] transition-colors"
          >
            Destinations
          </Link>
          <Link
            href="/my-bookings"
            className="text-base font-normal text-white/80 hover:text-[#18a0b5] transition-colors"
          >
            My Bookings
          </Link>
          <Link
            href="/add-destination"
            className="text-base font-normal text-white/80 hover:text-[#18a0b5] transition-colors"
          >
            Admin
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center">
            <Image src="/assets/Wanderlast.png" alt="Logo" width={160} height={200} />
          </Link>
        </div>

        {/* Right Side: Auth Links */}
        <div className="flex items-center justify-end gap-8">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-base font-normal text-white/80 hover:text-[#18a0b5] transition-colors"
          >
            <FiUser className="text-lg" />
            Profile
          </Link>
        {
          user ? 
          <>
          <li className="flex items-center gap-2 text-base font-normal text-white/80 hover:text-[#18a0b5] transition-colors">
            
            <Badge.Anchor>
              <Avatar size="lg" className="border-2 border-white">
              <Avatar.Image referrerPolicy="no-referrer" alt={user?.username} src={user?.image} />
              <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
             <Badge color="success" placement="bottom-right" size="sm" />
            </Badge.Anchor>
          </li>
          <Button variant="danger-soft" onClick={handleSignOut} className="rounded-none">
            Logout
          </Button>
          </>:
          <>
          <Link
            href="/signin"
            className="text-base font-normal text-white/80 hover:text-[#18a0b5] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-base font-normal text-white/80 hover:text-[#18a0b5] transition-colors"
          >
            Sign Up
          </Link>
        </>
}
        </div>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
