import React, { Dispatch, SetStateAction } from 'react';
import classes from './input.module.scss';

export interface InputProps {
  value?: string;
  onValue?: Dispatch<SetStateAction<string>>;
}

export const Input = ({ value, onValue }: InputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onValue && onValue(e.target.value)}
      className={classes.input}
    />
  );
};
