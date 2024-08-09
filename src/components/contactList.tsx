import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { removeContact, editContact } from "../features/contacts/contactsSlice";
import styled from "styled-components";

const List = styled.ul`
  text-align: center;
  list-style: none;
  span {
    display: inline-flex;
    margin-right: 16px;
    font-size: 20px;
    align-items: center;
  }
  button {
    border-radius: 5px;
    margin-right: 16px;
    padding: 5px;
  }
`;

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <button onClick={() => dispatch(removeContact(contact.id))}>
            Remover
          </button>
          <button
            onClick={() =>
              dispatch(editContact({ ...contact, name: "Novo Nome" }))
            }
          >
            Editar
          </button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;
