import React, { useEffect, useRef, useState } from "react";
import "./TittleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TittleCards = ({ tittle, category }) => {
  const cardRef = useRef();

  const [apiData,setApiData]=useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWE0Y2FlYmYyNTViNWY5YWUzMTljOGM1ZTg4M2M4MiIsIm5iZiI6MTc0MzE1NDY0My44Miwic3ViIjoiNjdlNjZkZDMxNGJiYTZhZTMxMDAyNTdkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9._9rHmS1qSiBs4UFvOt4mhWkoimyicC0FgrHcxVg2DSE'
    }
  };
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results)) 
  .catch(err => console.error(err));

    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>{tittle ? tittle : "Popular on Netflx"}</h2>
      <div className="card-list " ref={cardRef}>
        {apiData.map((card, index) => {
          return (  
           <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TittleCards;
