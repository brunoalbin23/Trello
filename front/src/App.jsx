import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Board from './components/Board';

function App() {
  const [boards, setBoards] = useState([]); // Estado para manejar los tableros

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home boards={boards} setBoards={setBoards} />} />
        <Route path="/board/:id" element={<Board boards={boards} setBoards={setBoards} />} />
      </Routes>
    </Router>
  );
}