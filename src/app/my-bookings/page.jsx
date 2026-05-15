import React from "react";
import { auth } from "@/lib/auth";
import { Card, Button, Chip, Badge } from "@heroui/react";
import { HiCalendar, HiTicket, HiTrash, HiEye } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import DeleteAlert from "@/components/DeleteAlert";

import { headers } from "next/headers";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Please login to view your bookings</h1>
        <Link href="/signin">
          <Button color="primary">Sign In</Button>
        </Link>
      </div>
    );
  }

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    cache: "no-store",
  });
  const bookings = await res.json();

  return (
    <div className="min-h-screen bg-black/90 font-outfit pt-34 pb-20">  
    <div className="max-w-11/12 mx-auto px-6 py-16 w-[95%]">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
          My Bookings
        </h1>
        <p className="text-xl text-zinc-500 font-medium">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Bookings List */}
      <div className="space-y-6">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <Card
              key={booking._id}
              className="border-none shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-none overflow-hidden"
              shadow="none"
            >
              <div className="flex flex-col md:flex-row p-6 gap-8">
                {/* Image Section */}
                <div className="w-full md:w-80 h-52 shrink-0 relative">
                  <Image
                    src={booking.imageUrl}
                    alt={booking.destinationName}
                    fill
                    className="object-cover rounded-none"
                  />
                </div>

                {/* Details Section */}
                <div className="grow flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <Chip
                        variant="soft"
                        color="success"
                        className="rounded-full bg-green-50 text-green-600 border-none font-semibold px-4"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          Confirmed
                        </div>
                      </Chip>
                    </div>

                    <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                      {booking.destinationName}
                    </h2>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-zinc-500 font-medium">
                        <HiCalendar className="text-xl" />
                        <span>Departure: {new Date(booking.departureDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-500 font-medium">
                        <HiTicket className="text-xl" />
                        <span>Booking ID: {booking._id.slice(-6).toUpperCase()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
                    <div className="text-4xl font-bold text-cyan-500">
                      ${booking.price}
                    </div>

                    <div className="flex gap-3 w-full sm:w-auto">
                      <DeleteAlert booking={booking} />
                      <Link href={`/destinations/${booking.destinationId}`}>
                        <Button
                          className="px-12 py-6 flex-1 text-lg rounded-none bg-cyan-600/80 border-none text-white font-normal sm:flex-none hover:bg-cyan-600 transition-colors"
                        >
                          View <HiEye className="text-2xl text-white"/>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <Card className="p-12 text-center border border-dashed border-zinc-200 rounded-none shadow-none bg-zinc-50">
            <p className="text-zinc-500 text-xl font-medium">You don't have any bookings yet.</p>
            <Link href="/destinations">
              <Button 
                className="mt-6 bg-cyan-500 text-white rounded-none px-10 font-bold mx-auto"
              >
                Explore Destinations
              </Button>
            </Link>
          </Card>
        )}
      </div>
    </div>
    </div>
  );
};

export default MyBookingsPage;
