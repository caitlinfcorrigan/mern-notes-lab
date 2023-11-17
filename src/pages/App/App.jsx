import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={ user } setUser={ setUser }/>
        <Routes>
          <Route path="/" element={ < NotesPage user={ user} setUser={ setUser } /> } />
        </Routes>
      </>
      :
      <AuthPage setUser={ setUser } />
    }
    </main>
  );
}
