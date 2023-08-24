import React from 'react';
import { Typography,AppBar } from "@mui/material";
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import "./app.css";


function App() {

  return (
    <div className='wrapper'>
      <AppBar className='appBar' position="static" color="inherit">
        <Typography width="50%" variant="h2" align="center">VidChat</Typography>
      </AppBar>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  );
}

export default App;
