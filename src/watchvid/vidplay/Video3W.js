
import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import './play.css';

const Watch = () => {
  const videoId = 'a7U4zbz24HQ';

  const onVideoEnd = () => {
    console.log('Video ended, display quiz or redirect to quiz page');
    
    window.location.href = '/watchQuiz3';
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
        <Link to='/watchQuiz3'>
          <button className='vid-start-button'>Start Quiz</button>
        </Link>
      </ul>
    </div>
  );
}

export default Watch;
