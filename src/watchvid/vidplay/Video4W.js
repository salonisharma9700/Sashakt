
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './play.css'; 

const Watch = () => {
  const videoId = 'QGLnnk46UQ0'; 
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);

    script.onload = () => {
      window.onYouTubeIframeAPIReady = () => {
        const player = new window.YT.Player('youtube-player', {
          height: '450',
          width: '900',
          videoId: videoId,
          events: {
            onReady: (event) => {
              playerRef.current = event.target;
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                window.location.href = '/watchQuiz4';
              }
            },
          },
        });
      };
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [videoId]);

  return (
    <div className='video1'>
      <div id='youtube-player'></div>
      <ul className='vid-ul'>
        <Link to='/watchQuiz4'>
          <button className='vid-start-button'>Start Quiz</button>
        </Link>
      </ul>
    </div>
  );
}

export default Watch;
