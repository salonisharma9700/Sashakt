
import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import './play.css';

const Watch = () => {
  const videoId = 'N14_XNH8Mqs'; 

  const onVideoEnd = () => {
    console.log('Video ended, display quiz or redirect to quiz page');
    
    window.location.href = '/watchQuiz2';
  };

  return (
    <div className='video1'>
      <YouTube
        videoId={videoId}
        opts={{
          width: '900',
          height: '450',
          playerVars: {
            autoplay: 1,
          },
        }}
        onEnd={onVideoEnd}
      />
      <ul className='vid-ul'>
        <Link to='/watchQuiz2'>
          <button className='vid-start-button'>Start Quiz</button>
        </Link>
      </ul>
    </div>
  );
};

export default Watch;
