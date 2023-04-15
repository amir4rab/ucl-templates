import { StateUpdater } from 'preact/hooks';
import classes from './input.module.scss';

export interface InputProps {
  value?: string;
  onValue?: StateUpdater<string>;
}

export const Input = ({ value, onValue }: InputProps) => {
  return (
    <input
      value={value}
      onChange={(e) =>
        onValue && e.target && onValue((e.target as HTMLInputElement).value)
      }
      className={classes.input}
    />
  );
};
