import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import Text from '../../../components/Text';
import Button from '../../../modules/Welcome/Button';
import { ButtonsArea, Container, CreateUserContent, LogoArea } from './styles';
import Input from '../../../components/Input';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Nome deve conter no mínimo 3 dígitos'),
  email: yup.string().email().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória').min(6, 'Minimo de 6'),
});

const WelcomePage = (): React.ReactElement => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const { values, errors, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      onSubmit: async ({ name, email, password }) => {
        try {
          await axios.post('http://192.168.1.11:5000/user/create', {
            name,
            email,
            password,
          });
          toast.success('Usuário cadastrado com sucesso');
          closeModal();
        } catch (error) {
          toast.error('Usuário já cadastrado');
        }
      },
      validationSchema,
    });

  const handleClickLogin = (): void => {};
  const closeModal = () => {
    resetForm();
    setShowCreateModal(false);
  };

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
        <Button onClick={handleClickLogin} cMargin="10px 0" cPadding="0px">
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

      <Dialog open={showCreateModal} onClose={closeModal}>
        <CreateUserContent>
          <Text
            size={32}
            align="center"
            color="#0B87CD"
            fontWeight={600}
            text="Cadastre-se"
          />
          <Text
            size={18}
            align="center"
            color="#8f8f8f"
            fontWeight={500}
            text="Preencha o formulário a baixo para se cadastrar."
            marginBottom={20}
          />
          <Input
            value={values.name}
            placeholder="Nome"
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            onError={errors.name}
          />
          <Input
            value={values.email}
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            onError={errors.email}
          />
          <Input
            value={values.password}
            placeholder="Senha"
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            onError={errors.password}
          />

          {errors.name ? (
            <Text
              size={16}
              align="center"
              color="#EF645C"
              fontWeight={600}
              text={errors.name}
            />
          ) : null}

          {errors.email ? (
            <Text
              size={16}
              align="center"
              color="#EF645C"
              fontWeight={600}
              text={errors.email}
            />
          ) : null}

          {errors.password ? (
            <Text
              size={16}
              align="center"
              color="#EF645C"
              fontWeight={600}
              text={errors.password}
            />
          ) : null}
          <Button cMargin="10px" cPadding="0" onClick={handleSubmit}>
            Pronto!
          </Button>
        </CreateUserContent>
      </Dialog>
    </Container>
  );
};

export default WelcomePage;
