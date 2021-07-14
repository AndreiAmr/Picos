import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const LogoArea = styled.div``;
const ButtonsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CreateUserContent = styled.div`
  background: #ffffff;
  margin: 0 auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { Container, LogoArea, ButtonsArea, CreateUserContent };
