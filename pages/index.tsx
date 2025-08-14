import React from "react";
import Pill from "@/components/Pill";
import { HERO_BG_IMAGE, FILTER_LABELS, PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${HERO_BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="bg-black/50 p-6 rounded">
          <h1 className="text-4xl font-bold mb-2">
            Find your favorite place here!
          </h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-8 flex flex-wrap gap-2 justify-center">
        {FILTER_LABELS.map((label) => (
          <Pill key={label} label={label} />
        ))}
      </section>

      {/* Listings Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-600">Rating: {property.rating} ⭐</p>
              <p className="text-blue-600 font-bold mt-2">${property.price}/night</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
