// src/Cadastro.js
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Cadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aqui você pode fazer uma requisição API para salvar os dados
  };

  return (
    <FormContainer>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Nome"
          {...register('nome', { required: 'Nome é obrigatório' })}
        />
        {errors.nome && <span>{errors.nome.message}</span>}

        <Input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email é obrigatório' })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <Input
          type="password"
          placeholder="Senha"
          {...register('senha', { required: 'Senha é obrigatória' })}
        />
        {errors.senha && <span>{errors.senha.message}</span>}

        <Button type="submit">Cadastrar</Button>
      </form>
    </FormContainer>
  );
};

export default Cadastro;
