import React from 'react';
import styles from './Options.module.css';
import buttonStyles from '../Button/Button.module.css';

export default function Options({ onUpdate, onReset, hasResetButton }) {
  return (
    <div>
      <button className={buttonStyles.button} onClick={() => onUpdate('good')}>Good</button>
      <button className={buttonStyles.button} onClick={() => onUpdate('neutral')}>Neutral</button>
      <button className={buttonStyles.button} onClick={() => onUpdate('bad')}>Bad</button>
      {hasResetButton && (
        <button className={`${buttonStyles.button} ${buttonStyles.resetButton}`} onClick={onReset}>Reset</button>
      )}
    </div>
  );
}
