// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./play.css"

// const Watch = () => {
//   return (
//     <div className='video1'>
//       <iframe
//         className='vid-iframe'
//         width="900"
//         height="450"
//         src="https://www.youtube.com/embed/HCYLdtug8sk"  // Use the embed URL
//         title="YouTube video player"
//         // frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//       <ul className='vid-ul'>
//         <Link to="/watchQuiz1">
//           <button className="vid-start-button">Start Quiz</button>
//         </Link>
//       </ul>
//     </div>
//   );
// }

// export default Watch;

// // import React, { useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import './play.css';

// // const Watch = () => {
// //   useEffect(() => {
// //     const iframe = document.querySelector('.vid-iframe');

// //     // Listen for the 'onStateChange' event to detect when the video ends
// //     const onPlayerStateChange = (event) => {
// //       if (event.data === window.YT.PlayerState.ENDED) {
// //         // Video has ended, you can trigger the display of the quiz or redirect to the quiz page
// //         console.log('Video ended, display quiz or redirect to quiz page');
// //         // Example: Redirect to the quiz page
// //         window.location.href = '/watchQuiz1';
// //       }
// //     };

// //     // Initialize the YouTube Player API
// //     const player = new window.YT.Player(iframe, {
// //       events: {
// //         onStateChange: onPlayerStateChange,
// //       },
// //     });

// //     // Clean up the player when the component unmounts
// //     return () => {
// //       player.destroy();
// //     };
// //   }, []);

// //   return (
// //     <div className='video1'>
// //       <iframe
// //         className='vid-iframe'
// //         width="900"
// //         height="450"
// //         src="https://www.youtube.com/embed/HCYLdtug8sk"
// //         title="YouTube video player"
// //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //         allowFullScreen
// //       ></iframe>
// //     </div>
// //   );
// // };

// // export default Watch;

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
