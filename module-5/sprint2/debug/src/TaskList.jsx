import React, { useState, useEffect } from 'react';
import { firestore } from './firebase-config'; // Assume correct config here.

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const snapshot = await firestore.collection('tasks').get();
      setTasks(snapshot.docs.map(doc => doc.data()));
    };
    fetchTasks();
  }, []); // Problem with dependencies.

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export  {TaskList};
