import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
    <div className="m-3 bg-black/30 backdrop-blur-md w-[98.5%] z-50">
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
        </div>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
