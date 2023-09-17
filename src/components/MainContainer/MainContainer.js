import React from "react";
import Hotel from "../Hotel/Hotel";

function MainContainer() {
  const hotels = [
    {
      imageUrl: "https://bit.ly/3ri2ali",
      title: "hotel1",
      description: "hotel 5 étoiles",
    },
    {
      imageUrl: "https://bit.ly/3ri2ali",
      title: "hotel2",
      description: "hotel 4 étoiles",
    },
    {
      imageUrl: "https://bit.ly/3ri2ali",
      title: "hotel3",
      description: "hotel 6 étoiles",
    },
    {
      imageUrl: "https://bit.ly/3ri2ali",
      title: "hotel4",
      description: "hotel 3 étoiles",
    },
    {
      imageUrl: "https://bit.ly/3ri2ali",
      title: "hotel4",
      description: "hotel 3 étoiles",
    },
    {
      imageUrl: "https://bit.ly/3ri2ali",
      title: "hotel4",
      description: "hotel 3 étoiles",
    },
  ];

  
  return (
    <div className="border border-red-500 h-screen flex flex-wrap space-x-5 p-4 mx-auto">
      {hotels.map((hotel, index) => (
        <Hotel
          imageUrl={hotel.imageUrl}
          title={hotel.title}
          description={hotel.description}
        />
      ))}
    </div>
  );
}

export default MainContainer;
