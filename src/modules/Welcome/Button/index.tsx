import React from 'react';
import { ButtonComponent } from './style';

type ButtonComponentProps = {
  onClick: () => void;
  children: React.ReactNode;
  cMargin: string;
  cPadding: string;
};

const Button = ({
  onClick,
  children,
  cMargin,
  cPadding,
}: ButtonComponentProps) => {
  return (
    <ButtonComponent
      onClick={onClick}
      style={{ margin: cMargin, padding: cPadding }}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
