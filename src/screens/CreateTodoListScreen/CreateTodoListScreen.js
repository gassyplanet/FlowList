/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { TaskInput, TaskView, TitleInput } from '../../components';
import './CreateTodoListScreen.css';

export default function CreateTodoListScreen() {
  function handleClick() {
    console.log(todoListTitle, todoTasks);
  }

  const [todoListTitle, setListTitle] = useState('');
  const [todoTasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...todoTasks, task]);
  }

  return (
    <div className="screenWrapper">
      <div className="extraWrapper">
        <div className="todoTitle">
          <TitleInput onTitleChange={setListTitle} />
        </div>

        {todoTasks.map(task => (
          <TaskView task={task} />
        ))}

        <div className="taskList">
          <TaskInput onTaskSave={addTask} />
        </div>
      </div>

      <div className="footer">
        <button type="button" onClick={handleClick}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
