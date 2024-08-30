import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos()
      .then(response => {
        console.log(response.data.results);
        setMovieList(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching trending videos:', error.message);
      });
  };

  return (
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide'>
      {movieList.map((item, index) => (
        <img
          key={item.id || index}  
          src={IMAGE_BASE_URL + item.backdrop_path}
          className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md'
          alt={item.title || item.name}
        />
      ))}
    </div>
  );
}

export default Slider;
