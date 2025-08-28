import React from "react";
import { PropertyProps } from "@/interfaces";

interface Props {
  property: PropertyProps;
}

const PropertyDetail: React.FC<Props> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-600 mb-2">
        {property.address.city}, {property.address.state}, {property.address.country}
      </p>
      <p className="mb-2">Rating: {property.rating} ⭐</p>
      <p className="mb-2">Category: {property.category.join(", ")}</p>
      <p className="text-2xl font-semibold mb-2">${property.price.toLocaleString()}</p>
      <div className="mb-2">
        <strong>Offers:</strong> {property.offers.bed} Beds, {property.offers.shower} Showers, {property.offers.occupants} Occupants
      </div>
      {property.discount && (
        <p className="text-red-500 font-bold mb-2">{property.discount} OFF</p>
      )}
    </div>
  );
};

export default PropertyDetail;
