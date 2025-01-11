import React, { useState } from 'react';
import Task from './Task';

function List({ list, board, boards, setBoards }) {
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    const newTask = { id: Date.now(), name: taskName };
    const updatedBoards = boards.map((b) => {
      if (b.id === board.id) {
        return {
          ...b,
          lists: b.lists.map((l) => (l.id === list.id ? { ...l, tasks: [...l.tasks, newTask] } : l)),
        };
      }
      return b;
    });
    setBoards(updatedBoards);
    setTaskName('');
  };

  return (
    <div style={styles.container}>
      <h3>{list.name}</h3>
      <div>
        {list.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar tarea</button>
    </div>
  );
}

const styles = {
  container: { padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px', minWidth: '200px' },
};

export default List;