import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TittleCards from '../../Components/TittleCards/TittleCards'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={ hero_title} alt=""  className='caption-img'/>
          <p> 
          Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p> <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TittleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TittleCards tittle={'BlockBuster Movies'} category={'top_rated'}/>
      <TittleCards tittle={'Only on Netflix'} category={'popular'}/>
      <TittleCards tittle={'Upcoming'} category={'upcoming'}/>
      <TittleCards tittle={'Top pics for You'} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home