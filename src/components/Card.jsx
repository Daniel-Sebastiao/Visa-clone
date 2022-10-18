// React
import React from "react";

// Components
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = () => {
  // API
  const DataCard = [
    {
      name: "Daniel Sebastião",
      date: "10 / 25",
      numCard: {
        firstColumn: 5200,
        secondColumn: 2000,
        thirdColumn: 2984,
        fourthColumn: 3001,
      },
      cvv: 820,
      text: `This Visa Credit Card belongs to the Visa federation, if you find it please return to its owner `,
    },
  ];

  return (
    <>
      <CardFront api={DataCard} />
      <CardBack api={DataCard} />
    </>
  );
};

export default Card;
