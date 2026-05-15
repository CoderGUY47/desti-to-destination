"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField } from "@heroui/react";
import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { toast } from "react-toastify";

const BookingCard = ({ destination = {} }) => {
  const { data: session, refetch } = authClient.useSession();
  const user = session?.user;

  const { price, _id, destinationName, imageUrl, country } = destination;
  const [departureDate, setDepartureDate] = useState(null);

  const handleBooking = async () => {
    if (!departureDate) {
      toast.error("Please select the date of your booking ");
      return;
    }

    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      userEmail: user?.email,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate.year, departureDate.month - 1, departureDate.day),
    };
    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success(`You have successfully booked ${destinationName} for $${price}`);
    refetch();
  };

  return (
    <div className="relative h-full">
      <div className="lg:sticky lg:top-32">
        <Card className="bg-white border-none p-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-none">
          <div className="mb-10">
            <p className="text-zinc-400 font-medium text-lg mb-5">
              Starting from
            </p>
            <h2 className="text-6xl font-bold text-cyan-500 mb-4">
              ${price || 0}
            </h2>
            <span className="text-zinc-400 font-medium text-lg">
              per person
            </span>
          </div>

          <div className="space-y-6">
            <div className="mt-7 mb-10">
            <DateField value={departureDate} onChange={setDepartureDate}>
              <DateField.Group
                className="w-full px-5 py-8 bg-gray-100 border border-zinc-300 text-zinc-600 focus-within:border-cyan-500 transition-colors font-medium rounded-none flex items-center"
              >
                <DateField.Input className="flex w-full outline-none">
                  {(segment) => (
                    <DateField.Segment
                      segment={segment}
                      className="outline-none focus:bg-cyan-500 focus:text-white rounded-sm px-0.5 caret-transparent"
                    />
                  )}
                </DateField.Input>
              </DateField.Group>
              </DateField>
            </div>

            <Button
              onClick={handleBooking}
              className="w-full text-white py-8 bg-cyan-500 rounded-none font-bold uppercase tracking-widest text-lg flex items-center justify-center gap-2 hover:bg-cyan-500/85 transition-all group"
            >
              Booking Now
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Button>

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
        </Card>
      </div>
    </div>
  );
};

export default BookingCard;
