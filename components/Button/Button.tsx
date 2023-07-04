import { PropsWithChildren } from 'react';

export interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return <button className="font-semibold mx-8">{title}</button>;
};
