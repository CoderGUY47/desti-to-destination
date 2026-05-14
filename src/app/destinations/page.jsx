import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destinations");
  const destination = await res.json();
  console.log(destination);
  return (
    <div className="min-h-screen px-6 py-24 sm:px-12 lg:px-24">
      <div className="">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Explore <span className="text-cyan-500">Destinations</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-500">
            Find your perfect travel experience from our curated collection
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destination.map((dest) => (
            <DestinationCard key={dest._id} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
