import logo from './logo.svg';
import './App.css';
import FirstDay from './Components/Day1/FirstDay';
import Day2 from './Components/day2/Day2';
import Day3 from './Components/Day3/Day3';
import Demo from './Components/Demo';
import Day4 from './Components/Day4/Day4';
import Day5 from './Components/Day5/Day5';
import Day6 from './Components/Day6/Day6';
import Day7 from './Components/Day7/Day7';
import Day8 from './Components/Day8/Day8';
import Day9 from './Components/Day9/Day9';
import Day10 from './Components/Day10/Day10';
import Day6_2 from './Components/Day6/Day6_2';
import Day61 from './Components/Day6/Day6_2';
import Day19 from './Components/Day19/Day19';
import Day25 from './Components/Day25/Day25';
import Day39 from './Components/Day39/Day39';
import Day20 from './Components/Day20/Day20';
import Day16 from './Components/Day16/Day16';
import Holiday from './Components/HolidayWebPage/Holiday';
import Ludo from './Components/LudoTask/Ludo';
import Day40 from './Components/Day40/Day40';
import Day26 from './Components/Day26/Day26';
import Logical from './Components/Logical';
import Chess from './Components/ChessTask/Chess';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Day1' element={<FirstDay/>}/>
          <Route path='/Day2' element={<Day2/>}/>
          <Route path='/Day3' element={<Day3/>}/>
          <Route path='/Day4' element={<Day4/>}/>
          <Route path='/Day5' element={<Day5/>}/>
          <Route path='/Day6' element={<Day6/>}/>
          <Route path='/Day6_2nd' element={<Day61/>}/>
          <Route path='/Day7' element={<Day7/>}/>
          <Route path='/Day8' element={<Day8/>}/>
          <Route path='/Day9' element={<Day9/>}/>
          <Route path='/Day10' element={<Day10/>}/>
          <Route path='/Day16' element={<Day16/>}/>
          <Route path='/Day19' element={<Day19/>}/>
          <Route path='/Day20' element={<Day20/>}/>
          <Route path='/Day25' element={<Day25/>}/>
          <Route path='/Day26' element={<Day26/>}/>
          <Route path='/Day39' element={<Day39/>}/>
          <Route path='/Day40' element={<Day40/>}/>
          <Route path='/Holiday' element={<Holiday/>}/>
          <Route path='/Ludo' element={<Ludo/>}/>
          <Route path='/chess' element={<Chess/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
