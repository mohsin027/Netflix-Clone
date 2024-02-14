import React, { useEffect, useState } from 'react';
import './RowPost.css';
import { imageUrl, apiBaseUrl, API_KEY } from '../../urls';
import axios from 'axios';
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [movieUrl, setMovieUrl] = useState('');

  const opts = {
    height: '490',
    width: '1660px',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`${apiBaseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log('data', response.data.results[0]);
        if (response.data.results.length !== 0) {
          setMovieUrl(response.data.results[0]);
        }
      })
      .catch((err) => {
        alert('no video found');
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(props.url);
      setMovie(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallposter' : 'poster'}
            alt='poster'
            src={`${imageUrl}${obj.backdrop_path}`}
          />
        ))}
      </div>
      {movieUrl && <Youtube opts={opts} videoId={movieUrl.key} />}
    </div>
  );
}

export default RowPost;
