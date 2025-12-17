import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import Header from './components/header';
import SongDetail from './components/SongDetail';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyle from './theme/GlobalStyles';
import LoginUser from './components/LoginUser';



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
              <Route path='/' element={<SearchResults setArtist={setArtist} artist={artist} className="search-results" />} />
              <Route path='/LoginUser' element={<LoginUser />} />
              <Route path='/SongDetail/:id' element={<SongDetail artist={artist}/>}/>
            </Routes>
          </div>
        </section>
      </div>
    </ThemeProvider>
    
  );
}


export default App;