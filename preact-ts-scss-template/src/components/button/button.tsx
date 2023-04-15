import { ComponentChildren } from 'preact';
import classes from './button.module.scss';

export interface ButtonProps {
  children: ComponentChildren;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={classes.button}>{children}</button>;
};
