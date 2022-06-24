import React from 'react';
import {ContactForm} from "./ContactForm"
import { ContactList } from './ContactList';

//contact name,email, image
export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactForm/>
    <ContactList/>
  </div>
);
