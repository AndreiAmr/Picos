import React from 'react';
import { ButtonComponent } from './style';

type ButtonComponentProps = {
  onClick: () => void;
  children: React.ReactNode;
  cMargin: string;
  cPadding: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({
  onClick,
  children,
  cMargin,
  cPadding,
  type,
}: ButtonComponentProps) => {
  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      style={{ margin: cMargin, padding: cPadding }}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
