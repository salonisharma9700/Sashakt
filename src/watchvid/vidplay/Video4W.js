// import React from 'react';
// import { Link } from 'react-router-dom';
// import './play.css'; // Make sure to replace with the correct CSS file

// const Watch = () => {
//   const videoId = 'QGLnnk46UQ0'; // Replace with the actual video ID

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
//         <Link to='/watchQuiz4'>
//           <button className='vid-start-button'>Start Quiz</button>
//         </Link>
//       </ul>
//     </div>
//   );
// }

// export default Watch;
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './play.css'; // Make sure to replace with the correct CSS file

const Watch = () => {
  const videoId = 'QGLnnk46UQ0'; // Replace with the actual video ID
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube API script
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize the YouTube Player API
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
              // Check if the video has ended (state code 0)
              if (event.data === window.YT.PlayerState.ENDED) {
                // Redirect to the quiz page when the video ends
                window.location.href = '/watchQuiz4';
              }
            },
          },
        });
      };
    };

    return () => {
      // Clean up the script tag when the component unmounts
      document.head.removeChild(script);
    };
  }, [videoId]);

  return (
    <div className='video1'>
      <div id='youtube-player'></div>
      <ul className='vid-ul'>
        {/* You can keep the button if you want to allow users to manually start the quiz */}
        <Link to='/watchQuiz4'>
          <button className='vid-start-button'>Start Quiz</button>
        </Link>
      </ul>
    </div>
  );
}

export default Watch;
