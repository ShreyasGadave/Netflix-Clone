import React, { useEffect, useRef } from "react";
import "./TittleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TittleCards = ({ tittle, category }) => {
  const cardRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>{tittle ? tittle : "Popular on Netflx"}</h2>
      <div className="card-list " ref={cardRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TittleCards;
