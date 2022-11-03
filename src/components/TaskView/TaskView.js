import React from 'react';
import PropTypes from 'prop-types';
import './TaskView.css';

export default function TaskView({ task: { title, description } }) {
  return (
    <div className="taskView">
      <div className="pls">
        <div className="box">
          <div type="button" className="removeTask">
            X
          </div>
        </div>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

TaskView.propTypes = {
  task: PropTypes.object.isRequired,
};
