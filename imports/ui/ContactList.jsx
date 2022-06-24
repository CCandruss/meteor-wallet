import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import {useTracker} from "meteor/react-meteor-data"

export const ContactList = () =>{
    const contacts = useTracker(() => {
       return ContactsCollection.find({}).fetch(); //we need tracker to watch db and rerun this computation when source changes
    })
    return(
        <>
            <h3>Contact List</h3>
            {contacts.map(contact => (
            <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))}
        </>
    )
}