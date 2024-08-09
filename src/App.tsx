import React from "react";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";
import styled from "styled-components";

const Titu = styled.h1`
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <div>
      <Titu>Lista de Contatos</Titu>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
