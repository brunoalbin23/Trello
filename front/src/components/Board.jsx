import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import List from './List';

function Board({ boards, setBoards }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const board = boards.find((b) => b.id === Number(id));

  const createList = () => {
    const newList = { id: Date.now(), name: `Lista ${board.lists.length + 1}`, tasks: [] };
    const updatedBoards = boards.map((b) =>
      b.id === board.id ? { ...b, lists: [...b.lists, newList] } : b
    );
    setBoards(updatedBoards);
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/')} style={styles.backButton}>Volver</button>
      <h1>{board?.name}</h1>
      <div style={styles.listContainer}>
        {board?.lists.map((list) => (
          <List key={list.id} list={list} board={board} boards={boards} setBoards={setBoards} />
        ))}
        <button style={styles.addListButton} onClick={createList}>Crear lista</button>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px' },
  backButton: { marginBottom: '20px', padding: '10px', fontSize: '16px' },
  listContainer: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  addListButton: { padding: '10px', fontSize: '16px', backgroundColor: '#d0f0d0', cursor: 'pointer' },
};

export default Board;