import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'large' | 'medium' | 'small';
  color: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}
export function Button(props: ButtonProps) {
  return <button {...props}>Button</button>;
}
