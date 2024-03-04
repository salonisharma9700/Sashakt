import React from 'react';
import { Route ,Router,Routes } from 'react-router-dom';
import './App.css'
import MyNav from './Component/MyNav';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs'
import Parents from './Component/Prents'
import Sashakt from './Component/Sashakt';
import Gbot from './Component/gbot'
// import Feedback from './ComponentApp.js/Feedback'
import Chatbot from './Component/Chatbot'
import Age1 from './Ag1';
import Watchvid from './watchvid/WatchVid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playgame from './Games/Hgame';
import WaGame from './Games/wackAmole/WaGa';
import Cgam from './Games/cgam/cgam';
// import Marioap from './Games/mario/ap';
import SlidePuzzle from './Games/puzzleag1/GL1'
import SlidePuzzle1 from './Games/puzzleag1/GL2'
import SlidePuzzle2 from './Games/puzzleag1/GL3'
import SlidePuzzle3 from './Games/puzzleag1/GL4'
import WQuiz1 from './watchvid/vidplay/WQuiz1'
import WQuiz2 from './watchvid/vidplay/WQuiz2'
import WQuiz3 from './watchvid/vidplay/WQuiz3'
import WQuiz4 from './watchvid/vidplay/WQuiz4'
import VideoW from './watchvid/VideoW'
import Video1W from './watchvid/vidplay/Video1W'
import Video2W from './watchvid/vidplay/Video2W'
import Video3W from './watchvid/vidplay/Video3W'
import Video4W from './watchvid/vidplay/Video4W'
import CgamQuiz from './Games/cgam/Cgamquiz';
// AG2
import EduCards from './ag2/EduCards'
import RTDevelopment from './ag2/ag2Games/RTDevelopment'
import RTDiscrimination from './ag2/ag2Games/RTDiscrimination'
import RTEducation from './ag2/ag2Games/RTEducation'
import RTParticipation from './ag2/ag2Games/RTParticipation'
import RTProtection from './ag2/ag2Games/RTProtection'
import RTSurvival from './ag2/ag2Games/RTSurvival'
import Ag2Home from './ag2/ag2home';
import WordGames from './ag2/WordGames'
import Memory from './ag2/Memory'
import EduMcq from './ag2/ag2Games/EduMcq'
import DevMcq from './ag2/ag2Games/DevMcq'
import ProMcq from './ag2/ag2Games/ProMcq'
import ParMcq from './ag2/ag2Games/ParMcq'
import DisMcq from './ag2/ag2Games/DisMcq'
import SurMcq from './ag2/ag2Games/SurMcq'
import McqCards from './ag2/VidAg2';
import Video1 from './ag2/ag2Games/Video1'
import Video2 from './ag2/ag2Games/Video2'
import Video3 from './ag2/ag2Games/Video3'
import QuizComponent1 from './ag2/ag2Games/QuizComponent1';
import QuizComponent2 from './ag2/ag2Games/QuizComponent2';
import QuizComponent3 from './ag2/ag2Games/QuizComponent3';
import GameBoard from './ag2/ag2Games/GameBoard';
import JumbledSentenceGame from './ag2/ag2Games/JumbledSentenceGame';
import WordSearchGame from './ag2/ag2Games/WordSearchGame';
import WordJumble from './ag2/ag2Games/WordJumble'



function App() {

  return (
    <div className="App">
      <MyNav/>
      <Gbot/>
     
      <Routes>
      <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <AboutUs/> } />
          <Route path="/parent" element={ <Parents/> } />
          <Route path="/chatbot" element={ <Chatbot/> } />
          <Route path="/shakti" element={<Sashakt/>} />
          <Route path="/Ag1" element={<Age1/>} />
          <Route path="/Hgame" element={<Playgame/>}/>
          <Route path="/WaGa" element={<WaGame/>}/>
          <Route path="/cgam" element={<Cgam/>}/>
          <Route exact path='/game1/l1' element={<SlidePuzzle/> }/>
          <Route exact path='/game1/l2' element={<SlidePuzzle1/> }/>
          <Route exact path='/game1/l3' element={<SlidePuzzle2/> }/>
          <Route exact path='/game1/l4' element={<SlidePuzzle3/> }/>
          <Route exact path='/watch' element={<Watchvid/>}/>
          <Route path="/watch1" element={ <VideoW/> } />
          <Route path='/watchVideo1' element={ <Video1W/>} />
          <Route path='/watchVideo2' element={ <Video2W/>} />
          <Route path='/watchVideo3' element={ <Video3W/>} />
          <Route path='/watchVideo4' element={ <Video4W/>} />
          <Route path='/watchQuiz1' element={ <WQuiz1/>} />
          <Route path='/watchQuiz2' element={ <WQuiz2/>} />
          <Route path='/watchQuiz3' element={ <WQuiz3/>} />
          <Route path='/watchQuiz4' element={ <WQuiz4/>} />
          <Route path='/Cgquiz' element={<CgamQuiz/>}/>
              {/* AG2 */}
              <Route path='/ag2home' element={<Ag2Home/>}/>
              <Route path='/EducationCards' element={<EduCards/>}/>
              <Route path="/RTEducation" element={<RTEducation/>}/>
              <Route path="/RTDevelopment" element={<RTDevelopment/>}/>
              <Route path="/RTProtection" element={<RTProtection/>}/>
              <Route path="/RTDiscrimination" element={<RTDiscrimination/>}/>
              <Route path="/RTSurvival" element={<RTSurvival/>}/>
              <Route path="/RTParticipation" element={<RTParticipation/>}/>
              <Route path='/Memory' element={<Memory/>}/>
              <Route path="/EduMcq" element={<EduMcq/>}/>
              <Route path="/DevMcq" element={<DevMcq/>}/>
              <Route path="/ProMcq" element={<ProMcq/>}/>
              <Route path="/DisMcq" element={<DisMcq/>}/>
              <Route path="/SurMcq" element={<SurMcq/>}/>
              <Route path="/ParMcq" element={<ParMcq/>}/>
              <Route path='/GameBoard' element={<GameBoard/>}/>
              <Route path='/WordGames' element={<WordGames/>}/>
              <Route path='/McqCards' element={<McqCards/>}/>
              
              <Route path="/Video1" element={<Video1/>}/>
              <Route path="/Video2" element={<Video2/>}/>
              <Route path="/Video3" element={<Video3/>}/>
              <Route path="/QuizComponent1" element={<QuizComponent1/>}/>
              <Route path="/QuizComponent2" element={<QuizComponent2/>}/>
              <Route path="/QuizComponent3" element={<QuizComponent3/>}/>
              <Route path='/JumbledSentenceGame' element={<JumbledSentenceGame/>}/>
              <Route path="/WordSearchGame" element={<WordSearchGame/>}/>
              <Route path="/WordJumble" element={<WordJumble/>}/>
              


          
      </Routes>
      
    </div>
  );
}

export default App; 


