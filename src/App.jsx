import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './sections/Header';
import {Section} from '@stacknvault/iex2-core'



function App() {
  // const { iex, ready, error } = useIEX();
  // const {context, currentStage} = iex;

  
  return (
    <div className="App">
      <header className="App-header">
          <Section name="header">
            <Header/>
          </Section>
      </header>
    </div>
  );
}

export default App;
