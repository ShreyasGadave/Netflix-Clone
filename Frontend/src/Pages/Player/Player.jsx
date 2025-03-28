import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_TMDB_AUTH_TOKEN,
    }
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_TMDB_API_URL}/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0] || {})) // Handle empty results
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-2)} />
      {apiData.key ? (
        <iframe 
          src={`${import.meta.env.VITE_YOUTUBE_EMBED_URL}${apiData.key}`} 
          width='90%' 
          height='90%' 
          title='trailer' 
          frameBorder='0' 
          allowFullScreen
        ></iframe>
      ) : (
        <p>Trailer not available</p>
      )}
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : 'N/A'}</p>
        <p>{apiData.name || 'No Title Available'}</p>
        <p>{apiData.type || 'Unknown Type'}</p>
      </div>
    </div>
  );
}

export default Player;
