import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskInput.css';

export default function TaskInput({ onTaskSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function createTask() {
    const task = {
      title,
      description,
    };

    onTaskSave(task);

    setTitle('');
    setDescription('');
  }

  return (
    <>
      <div className="taskInput">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="description"
          type="text"
          placeholder="Task"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button className="newTask" type="button" onClick={createTask}>
          +
        </button>
      </div>
    </>
  );
}

TaskInput.propTypes = {
  onTaskSave: PropTypes.func.isRequired,
};
