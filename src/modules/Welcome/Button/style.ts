import styled from 'styled-components';

interface ButtonComponentProps {
  dark?: boolean | false;
}

const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 70%;
  height: 35px;
  border-radius: 5px;
  border: 0;

  background-color: ${(props) => (props.dark ? '' : '#73CDFF')};
  color: ${(props) => (props.dark ? '' : '#ffffff')};
`;

export { ButtonComponent };
