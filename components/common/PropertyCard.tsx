import React from "react";
import { PropertyProps } from "@/interfaces";

interface Props {
  property: PropertyProps;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{property.name}</h2>
        <p className="text-sm text-gray-500 mb-2">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
        <p className="text-sm mb-2">Rating: {property.rating} ⭐</p>
        <p className="text-sm mb-2">
          Category: {property.category.join(", ")}
        </p>
        <p className="text-lg font-bold mb-2">${property.price.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mb-2">
          Offers: {property.offers.bed} Beds, {property.offers.shower} Showers, {property.offers.occupants} Occupants
        </p>
        {property.discount && (
          <p className="text-red-500 font-semibold">{property.discount} OFF</p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
