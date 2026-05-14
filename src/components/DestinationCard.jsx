import Image from "next/image";
import React from "react";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { PiCalendarDuotone } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const { _id, destinationName, country, price, duration, imageUrl } = destination;

  return (
    <div className="w-full bg-white rounded-none overflow-hidden shadow-md">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm px-5 py-1.5 rounded-none flex items-center gap-2 shadow-sm">
          <span className="font-semibold text-white text-lg">4.5</span>
          <FaStar className="text-amber-400 text-lg" />
        </div>
      </div>

      <div className="py-4 bg-gray-200 px-4">
        <div className="flex items-center gap-2 text-zinc-500 mb-3">
          <PiAirplaneTakeoff className="text-2xl" />
          <span className="text-lg">{country}</span>
        </div>

        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
            {destinationName}
          </h2>
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-zinc-900">${price}</span>
            <span className="text-zinc-500 text-sm ml-1">/Person</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-zinc-500 mb-8">
          <PiCalendarDuotone className="text-2xl" />
          <span className="text-lg font-medium">{duration} Days / {duration - 1} Night</span>
        </div>
        <Link href={`/destinations/${_id}`}>
        <button className="group flex items-center gap-2 text-cyan-500 font-bold text-xl uppercase tracking-wider hover:text-cyan-600 transition-colors cursor-pointer">
          BOOK NOW 
          <CgArrowsExpandUpRight className="text-2xl transition-transform duration-300 group-hover:rotate-45" />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
