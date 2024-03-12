import React from 'react';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Overview, Revenue, Users } from './pages/Overview';
import {Reports, Reports1, Reports2, Reports3} from './pages/Reports'
import {Support} from './pages/Support';
import { Message, Message1, Message2 } from './pages/Message';
import {Products} from './pages/Products';
import './App.css'
import { Team, Team1, Team2, Team3 } from './pages/Team';

function App() {
  return (
    <Router>
      
      <Sidebar />
    <Routes>
        <Route path='/overview' exact Component={Overview}></Route>
        <Route path='/overview/users' exact Component={Users}></Route>
        <Route path='/overview/revenue' exact Component={Revenue}></Route>
        <Route path='/reports' exact Component={Reports}></Route>
        <Route path='/reports/reports1' exact Component={Reports1}></Route>
        <Route path='/reports/reports2' exact Component={Reports2}></Route>
        <Route path='/reports/reports3' exact Component={Reports3}></Route>
        <Route path='/team' exact Component={Team}></Route>
        <Route path='/teams/team1' exact Component={Team1}></Route>
        <Route path='/teams/team2' exact Component={Team2}></Route>
        <Route path='/teams/team3' exact Component={Team3}></Route>
        <Route path='/support' exact Component={Support}></Route>
        <Route path='/messages' exact Component={Message}></Route>
        <Route path='/message/message1' exact Component={Message1}></Route>
        <Route path='/message/message2' exact Component={Message2}></Route>
        <Route path='/products' exact Component={Products}></Route>
        </Routes>
      

      
    </Router>
  )
}

export default App
