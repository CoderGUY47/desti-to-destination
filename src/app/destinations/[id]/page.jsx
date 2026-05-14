import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowLeft, HiCheck } from "react-icons/hi";
import { VscEditSparkle } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiAirplaneTakeoff, PiCalendarDuotone } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { EditModal } from "@/components/EditModal";
import DeleteDestinaiton from "@/components/DeleteDestinaiton";

const DestinationsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const destination = await res.json();

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center font-outfit">
        <p className="text-zinc-500 text-xl">Destination not found.</p>
      </div>
    );
  }

  const {
    destinationName,
    country,
    price,
    duration,
    imageUrl,
    departureDate,
    description,
  } = destination;

  return (
    <div className="min-h-screen bg-white font-outfit pt-24 pb-20">
      <div className="max-w-11/12 mx-auto px-4 lg:px-6">
        {/* Top Navigation & Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-medium"
          >
            <HiArrowNarrowLeft className="text-xl" />
            Back to Destinations
          </Link>
          <div className="flex items-center gap-4">
            <EditModal destination={destination} />
            <DeleteDestinaiton destination={destination} />
          </div>
        </div>

        {/* Featured Image Section */}
        <div className="relative w-full aspect-[21/9] rounded-none overflow-hidden mb-12 shadow-sm">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Information */}
          <div className="lg:col-span-2">
            {/* Header Info */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-zinc-500 mb-4 font-normal text-xl">
                <PiAirplaneTakeoff className="text-xl" />
                {country}
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
                {destinationName}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-zinc-500">
                <div className="flex items-center gap-2 font-medium">
                  <FaStar className="text-amber-500 text-lg" />
                  <span className="text-zinc-900 font-bold">4.9</span>
                  <span className="text-zinc-400 font-normal">
                    (234 reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <PiCalendarDuotone className="text-2xl" />
                  <span>
                    {duration} Days / {duration - 1} Nights
                  </span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-zinc-900 mb-4">
                Overview
              </h3>
              <p className="text-xl text-zinc-500 leading-relaxed max-w-7xl">
                {description}
              </p>
            </div>

            {/* Highlights */}
            <div className="">
              <h3 className="text-3xl font-semibold text-zinc-900 mb-4">
                Highlights
              </h3>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-7xl mb-10">
                Discover the magic of {destinationName} with pristine beaches,
                ancient temples, and vibrant culture. Experience luxury resorts,
                tropical landscapes, and unforgettable sunsets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Luxury beachfront accommodation",
                  "Visit Uluwatu Temple at sunset",
                  "Traditional Balinese spa treatment",
                  "Private beach dinner experience",
                  "Sunrise trek to Mount Batur",
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 bg-green-50 p-1 group-hover:bg-green-100 transition-colors">
                      <HiCheck className="text-green-500 text-lg" />
                    </div>
                    <span className="text-gray-400 text-lg font-normal">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Sidebar */}
          <div className="relative">
            <div className="lg:sticky lg:top-32 bg-white border-none p-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              <div className="mb-10">
                <p className="text-zinc-400 font-medium text-lg mb-2">
                  Starting from
                </p>
                <h2 className="text-5xl font-bold text-cyan-500">${price}</h2>
                <span className="text-zinc-400 font-medium text-lg">
                  per person
                </span>
              </div>

              <div className="space-y-6">
                <div className="mt-6 mb-10">
                  <input
                    type="text"
                    defaultValue={departureDate}
                    className="w-full px-5 py-4 bg-gray-100 border border-zinc-100 text-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors font-medium"
                  />
                </div>

                <button className="w-full bg-cyan-500 text-white py-5 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-cyan-600 transition-all group">
                  Book Now
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>

                <div className="pt-6 space-y-3">
                  {[
                    "Free cancellation up to 7 days",
                    "Travel insurance included",
                    "24/7 customer support",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <HiCheck className="text-green-600 text-lg" />
                      <span className="text-lg text-gray-400 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsDetailsPage;
