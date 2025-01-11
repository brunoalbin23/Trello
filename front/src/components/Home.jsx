import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ boards, setBoards }) {
  const navigate = useNavigate();

  const createBoard = () => {
    const newBoard = { id: Date.now(), name: `Tablero ${boards.length + 1}`, lists: [] };
    setBoards([...boards, newBoard]);
  };

  return (
    <div style={styles.container}>
      <h1>Mis Tableros</h1>
      <div style={styles.boardList}>
        {boards.map((board) => (
          <div
            key={board.id}
            style={styles.board}
            onClick={() => navigate(`/board/${board.id}`)}
          >
            {board.name}
          </div>
        ))}
      </div>
      <button style={styles.button} onClick={createBoard}>Crear nuevo tablero</button>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '20px' },
  boardList: { display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' },
  board: { padding: '20px', backgroundColor: '#f0f0f0', cursor: 'pointer', borderRadius: '5px' },
  button: { marginTop: '20px', padding: '10px 20px', fontSize: '16px' },
};

export default Home;