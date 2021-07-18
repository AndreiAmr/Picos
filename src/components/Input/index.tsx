import React from 'react';
import {
  ErrorOutlineOutlined,
  CheckCircleOutlineOutlined,
} from '@material-ui/icons';

import { Container, InputComponent } from './style';

interface InputProps {
  value: string;
  placeholder: string;
  onChange: any;
  onBlur: any;
  name: string;
  onError: any;
  type?: string;
}

const Input = ({
  value,
  placeholder,
  onChange,
  onBlur,
  name,
  onError,
  type,
}: InputProps) => {
  return (
    <Container>
      {onError ? (
        <ErrorOutlineOutlined color="primary" style={{ margin: '0px 5px ' }} />
      ) : (
        <CheckCircleOutlineOutlined
          color="primary"
          style={{ margin: '0px 5px ' }}
        />
      )}
      <InputComponent
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={onError ? 'error-style' : ''}
        type={type}
      />
    </Container>
  );
};

export default Input;
