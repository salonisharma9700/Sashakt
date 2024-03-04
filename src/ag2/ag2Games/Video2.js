
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Video2 = () => {
  const videoId = 'zNTUMNKSNwk'; 
  const playerRef = useRef(null);

  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);

    script.onload = () => {
     
      window.onYouTubeIframeAPIReady = () => {
        const player = new window.YT.Player('youtube-player', {
          height: '400',
          width: '600',
          videoId: videoId,
          events: {
            onReady: (event) => {
              playerRef.current = event.target;
            },
            onStateChange: (event) => {
            
              if (event.data === window.YT.PlayerState.ENDED) {
                
                window.location.href = '/QuizComponent2';
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
    <div className='edu'>
      <div className='video1'>
        <div id='youtube-player'></div>
       
        <Link to='/QuizComponent2' className='btn btn-primary' style={{ display: 'block' }}>
          Let's start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Video2;
