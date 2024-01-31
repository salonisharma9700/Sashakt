// import React from 'react';
// import { Link } from 'react-router-dom';
// import './play.css'; // Make sure to replace with the correct CSS file

// const Watch = () => {
//   const videoId = 'a7U4zbz24HQ'; // Replace with the actual video ID

//   return (
//     <div className='video1'>
//       <iframe
//         className='vid-iframe'
//         width='900'
//         height='450'
//         src={`https://www.youtube.com/embed/${videoId}`} // Use the embed URL
//         title='YouTube video player'
//         frameBorder='0'
//         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//         allowFullScreen
//       ></iframe>
//       <ul className='vid-ul'>
//         <Link to='/watchQuiz3'>
//           <button className='vid-start-button'>Start Quiz</button>
//         </Link>
//       </ul>
//     </div>
//   );
// }

// export default Watch;
import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import './play.css'; // Make sure to replace with the correct CSS file

const Watch = () => {
  const videoId = 'a7U4zbz24HQ'; // Replace with the actual video ID

  const onVideoEnd = () => {
    // Video has ended, you can trigger the display of the quiz or redirect to the quiz page
    console.log('Video ended, display quiz or redirect to quiz page');
    // Example: Redirect to the quiz page
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
