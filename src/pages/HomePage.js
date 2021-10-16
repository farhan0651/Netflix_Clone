import React from 'react';
import Banner from 'ui/Banner';
import Header from 'ui/Header';
import MediaSlider from 'ui/MediaSlider';

function HomeScreen() {
  return(
    <div>
      <Header/>
      <Banner/>
      <MediaSlider 
      mediaType='tv'
      title="NETFLIX ORIGNALS"
      path="/discover/tv"
      params={{with_networks:213}}
      isLarge
      />
      <MediaSlider 
      title="Trending now"
      path="/trending/all/week"
      />
      <MediaSlider
      mediaType='movies' 
      title="Popular Movies"
      path="/discover/movie"
      isLarge
      />
      <MediaSlider 
      title="Top Rated"
      path="/movie/top_rated"
      />
      <MediaSlider 
      title="Action Movie"
      path="/discover/movie"
      params={{with_genre:28}}
      isLarge
      />
    </div>
  );
}

export default HomeScreen;
