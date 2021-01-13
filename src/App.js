import React from 'react';
import './sass/App.sass';

import Options from './components/Options'
import Display from './components/Display'
import Control from './components/Control';

import { TimerContextProvider } from './contexts/TimerProvider';



function App() {


  return (
    <div className='App'>
      <div className='clock'>
        <h1 className='caption caption--size_2 caption--bold caption--align_center caption--line_height_1'>25 + 5 Clock</h1>
        <TimerContextProvider>
          <Options />
          <Display />
          <Control />
        </TimerContextProvider>
      </div>
    </div>
  );
}

export default App;
