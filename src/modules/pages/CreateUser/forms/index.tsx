import React from 'react';
import { Dialog } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from '../../../../components/Text';
import { CreateUserContent } from './styles';
import Input from '../../../../components/Input';
import Button from '../../Welcome/Button';

interface CreateUserProps {
  open: boolean;
  closeFn: () => void;
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Email é obrigatório'),
  name: yup.string().min(3, 'Nome deve conter no minímo 3 letras'),
  password: yup.string().min(6, 'Senha deve conter 6 letra'),
});

const CreateUser = ({ open, closeFn }: CreateUserProps) => {
  const { values, handleSubmit, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validationSchema,
  });
  return (
    <Dialog open={open} onClose={closeFn}>
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
        <Button
          cMargin="10px"
          cPadding="0"
          onClick={handleSubmit}
          type="submit"
        >
          Pronto!
        </Button>
      </CreateUserContent>
    </Dialog>
  );
};

export default CreateUser;
