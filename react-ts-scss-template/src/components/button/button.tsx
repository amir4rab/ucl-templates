import React, { ReactNode } from 'react';
import classes from './button.module.scss';

export interface ButtonProps {
  children: ReactNode;
}

/**
 * Button component
 * @param {{ children: ReactNode }} Props
 * @returns {JSX.Element} JSX Element
 */
export const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button className={classes.button}>{children}</button>;
};
