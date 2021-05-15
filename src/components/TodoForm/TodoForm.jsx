import React from 'react';
import styles from './TodoForm.module.css';

export const TodoForm = () => {
  return (
    <form className={styles.container}>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};
