import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import genre from './urls'



function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <RowPost title="Netflix Originals" url={genre.originals}/>
     <RowPost title="Trending" isSmall url={genre.trending}/>
     <RowPost title="Action" isSmall url={genre.action}/>
     <RowPost title="Documentaries" isSmall url={genre.Documentaries}/>
     <RowPost title="Comedy Movies" isSmall url={genre.comedyMovies}/>
     <RowPost title="Romance Movies" isSmall url={genre.RomanceMovies}/>
     <RowPost title="Horror Movies" isSmall url={genre.horrorMovies}/>
    </>
  )
}

export default App
