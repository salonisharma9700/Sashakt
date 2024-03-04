

import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import './play.css';

const Watch = () => {
  const onVideoEnd = () => {
    console.log('Video ended, display quiz or redirect to quiz page');
    window.location.href = '/watchQuiz1';
  };

  return (
    <div className='video1'>
      <YouTube
        videoId="HCYLdtug8sk"
        opts={{
          width: '900',
          height: '450',
          playerVars: {
            autoplay: 1,
          },
        }}
        onEnd={onVideoEnd}
      />
    </div>
  );
};

export default Watch;
