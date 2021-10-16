import React, { useState, useEffect } from "react";

import tmdbApi from 'api/tmdb';
import MediaCard from "./MediaCard";

function MediaSlider({ mediaType, title, path, params = {}, isLarge=false }) {
  const[items,setItems]=useState([]);
  useEffect(()=>{
      async function fetchData() {
        const json = await tmdbApi.get(path, params);
        setItems(json.results);
      }
      fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return(
    <div className="media-slider">
      <h3 className="media-slider__title">{title}</h3>
      <div className="media-slider__cards">
      {
        items.map((media)=>(
          <MediaCard
          media={media}
          mediaType="tv"
          isLarge={isLarge} 
          />
        ))
      }
      </div>
    </div>
  );
}

export default MediaSlider;
