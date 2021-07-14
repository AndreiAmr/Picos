import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  background: #5cbaef;
  margin: 5px 0;
  border-radius: 5px;
  overflow: hidden;
  padding: 0 0px 0 5px;
`;

const InputComponent = styled.input`
  width: 100%;
  height: 38px;
  color: #fff;
  background: #0b87cd;
  border: 0;
  outline: 0;
  padding-left: 10px;

  &::placeholder {
    color: #fff;
  }
`;

export { Container, InputComponent };
