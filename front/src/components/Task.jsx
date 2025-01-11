import React from 'react';

function Task({ task }) {
  return <div style={styles.task}>{task.name}</div>;
}

const styles = {
  task: { padding: '5px', backgroundColor: '#e0e0e0', margin: '5px 0', borderRadius: '5px' },
};

export default Task;