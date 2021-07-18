import React from 'react';
import { Dialog } from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import Text from '../../../../components/Text';
import Input from '../../../../components/Input';

import Button from '../../Welcome/Button';
import { Container } from './styles';

interface LoginFormProps {
  open: boolean;
  closeFn: () => void;
}

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

const LoginForm = ({ open, closeFn }: LoginFormProps) => {
  const { values, handleSubmit, errors, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }) => {
      try {
        await axios.get('http://192.168.1.11:5000/user/login', {
          data: {
            email,
            password,
          },
        });
        toast.success('Login feito com sucesso');
      } catch (err) {
        toast.error('ocorreu um erro');
        console.log(err);
      }
    },
    validationSchema,
  });

  return (
    <Dialog open={open} onClose={closeFn} fullWidth>
      <Container>
        <Text
          size={32}
          align="center"
          color="#0B87CD"
          fontWeight={600}
          text="Login"
        />
        <Text
          size={18}
          align="center"
          color="#8f8f8f"
          fontWeight={500}
          text="Preencha o formulário a baixo."
          marginBottom={20}
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
        <Button
          cMargin="10px"
          cPadding="0"
          onClick={handleSubmit}
          type="submit"
        >
          Pronto!
        </Button>
      </Container>
    </Dialog>
  );
};

export default LoginForm;
