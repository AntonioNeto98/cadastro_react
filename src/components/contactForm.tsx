import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contacts/contactsSlice";
import styled from "styled-components";

const Form = styled.form`
  text-align: center;
  input {
    padding: 4px;
    margin-right: 10px;
  }
  button {
    padding: 4px;
    border-radius: 5px;
    background-color: #2ecc71;
  }
`;

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now().toString(), name, email, phone }));
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome Completo"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
      />
      <button type="submit">Adicionar Contato</button>
    </Form>
  );
};

export default ContactForm;
