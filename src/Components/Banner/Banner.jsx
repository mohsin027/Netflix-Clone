import React, { useEffect } from 'react'
import './Banner.css'
import axios from 'axios'
import genre, { imageUrl } from '../../urls';
import { useState } from 'react';
function Banner() {
    const [banner, setBanner] = useState({});
    useEffect(()=>{
        const fetchData = async () => {
            let { data } = await axios.get(genre.trending);
            let random = Math.floor(Math.random() * 20);
            setBanner(data.results[random]);
            console.log(data.results[random]);
          };
          fetchData();
    },[])
    
    return (
        <div 
        style={{backgroundImage:`url(${imageUrl+banner.backdrop_path})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{banner.title}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{banner.overview}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
