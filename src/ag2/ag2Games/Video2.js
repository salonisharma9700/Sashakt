// import React from 'react';
// import { Link } from "react-router-dom";
// const Video2 = () => {
//     return (
//         <div className="edu">
//             <div className='video1'>
//                 <iframe width="600" height="400" src="https://www.youtube.com/embed/zNTUMNKSNwk?si=XXR0-Gb7G2Cxggp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

//                 <Link to="/QuizComponent2" className="btn btn-primary" style={{ display: 'block' }}>Let's start Quiz</Link>
//             </div>
//         </div>
//     );
// }

// export default Video2;
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Video2 = () => {
  const videoId = 'zNTUMNKSNwk'; // Replace with the actual video ID
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
          height: '400',
          width: '600',
          videoId: videoId,
          events: {
            onReady: (event) => {
              playerRef.current = event.target;
            },
            onStateChange: (event) => {
              // Check if the video has ended (state code 0)
              if (event.data === window.YT.PlayerState.ENDED) {
                // Redirect to the quiz page when the video ends
                window.location.href = '/QuizComponent2';
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
    <div className='edu'>
      <div className='video1'>
        <div id='youtube-player'></div>
        {/* You can keep the button if you want to allow users to manually start the quiz */}
        <Link to='/QuizComponent2' className='btn btn-primary' style={{ display: 'block' }}>
          Let's start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Video2;
