import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import Header from './components/header';
import SongDetail from './components/SongDetail';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyle from './theme/GlobalStyles';



function App() {
  const [artist, setArtist] = useState('');

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Header appName="My Library Music"/>
        <section className="main">
          <div className='songs-section'>
            <Routes>
              <Route path='/SongDetail/:id' element={<SongDetail artist={artist}/>}/>
              <Route path='/' element={<SearchResults setArtist={setArtist} artist={artist} className="search-results" />} />
            </Routes>
          </div>
        </section>
      </div>
    </ThemeProvider>
    
  );
}


export default App;