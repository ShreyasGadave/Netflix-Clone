import React, { useEffect,useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id}=useParams();
  const navigate=useNavigate();

const [apiData, setApiData] = useState({
  name:'',
  key:'',
  published_at:'',
  typeof:''
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWE0Y2FlYmYyNTViNWY5YWUzMTljOGM1ZTg4M2M4MiIsIm5iZiI6MTc0MzE1NDY0My44Miwic3ViIjoiNjdlNjZkZDMxNGJiYTZhZTMxMDAyNTdkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9._9rHmS1qSiBs4UFvOt4mhWkoimyicC0FgrHcxVg2DSE'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>
    </div>
  )
}

export default Player