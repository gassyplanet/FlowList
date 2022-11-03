import React from 'react';
import PropTypes from 'prop-types';
import './TitleInput.css';

export default function TitleInput({ onTitleChange }) {
  return (
    <textarea
      className="titleArea"
      type="text"
      maxLength={52}
      placeholder="Name Your Todo List"
      onChange={e => onTitleChange(e.target.value)}
    />
  );
}

TitleInput.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
};
