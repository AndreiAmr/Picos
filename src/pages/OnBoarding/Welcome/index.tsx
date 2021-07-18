import React, { useState } from 'react';
import Text from '../../../components/Text';
import Button from '../../../modules/pages/Welcome/Button';
import { ButtonsArea, Container, LogoArea } from './styles';

import LoginForm from '../../../modules/pages/Login/forms/login';
import CreateUser from '../../../modules/pages/CreateUser/forms';

const WelcomePage = (): React.ReactElement => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  return (
    <Container>
      <LogoArea>
        <Text
          text="PICOS"
          size={80}
          fontWeight={600}
          color="#ffffff"
          align="center"
        />
        <Text
          text="encontre lugares para andar de skate"
          size={18}
          fontWeight={600}
          color="#ffffff"
          align="center"
        />
      </LogoArea>
      <ButtonsArea>
        <Button
          onClick={() => setShowLoginModal(true)}
          cMargin="10px 0"
          cPadding="0px"
          type="button"
        >
          <Text
            size={18}
            align="center"
            color="#ffffff"
            fontWeight={600}
            text="Login"
          />
        </Button>
        <Button
          onClick={() => setShowCreateModal(true)}
          cMargin="0px"
          cPadding="0px"
          type="button"
        >
          <Text
            size={18}
            align="center"
            color="#ffffff"
            fontWeight={600}
            text="Cadastre-se"
          />
        </Button>
      </ButtonsArea>
      <LoginForm
        open={showLoginModal}
        closeFn={() => setShowLoginModal(false)}
      />
      <CreateUser
        open={showCreateModal}
        closeFn={() => setShowCreateModal(false)}
      />
    </Container>
  );
};

export default WelcomePage;
