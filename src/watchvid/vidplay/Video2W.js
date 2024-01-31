// import React from 'react';
// import { Link } from 'react-router-dom';
// import './play.css';

// const Watch = () => {
//   const videoId = 'N14_XNH8Mqs'; 

//   return (
//     <div className='video1'>
//       <iframe
//         className='vid-iframe'
//         width='900'
//         height='450'
//         src={`https://www.youtube.com/embed/${videoId}`} 
//         title='YouTube video player'
//         frameBorder='0'
//         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//         allowFullScreen
//       ></iframe>
//       <ul className='vid-ul'>
//         <Link to='/watchQuiz2'>
//           <button className='vid-start-button'>Start Quiz</button>
//         </Link>
//       </ul>
//     </div>
//   );
// };

// export default Watch;
import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import './play.css';

const Watch = () => {
  const videoId = 'N14_XNH8Mqs'; 

  const onVideoEnd = () => {
    // Video has ended, you can trigger the display of the quiz or redirect to the quiz page
    console.log('Video ended, display quiz or redirect to quiz page');
    // Example: Redirect to the quiz page
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
