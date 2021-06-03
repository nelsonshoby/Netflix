import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {originals,action,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './urls'
import "./App.css"
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Row_Post/Rowpost'



function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Banner></Banner>
        <Rowpost url={originals} title="Netflix Originals"></Rowpost>
        <Rowpost url={action} title="Action" isSmall></Rowpost>
        <Rowpost url={ComedyMovies} title="ComedyMovies" isSmall></Rowpost>
        <Rowpost url={HorrorMovies} title="HorrorMovies" isSmall></Rowpost>
        <Rowpost url={RomanceMovies} title="RomanceMovies" isSmall></Rowpost>
        <Rowpost url={Documentaries} title="Documentaries" isSmall></Rowpost>
    </div>
  );
}

export default App;
