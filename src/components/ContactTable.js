import React, {Component} from 'react';
import ContactRow from './ContactRow'
import {Table} from 'react-bootstrap';

export default function ContactTable(props){

  let {contactInfoList, _updateEditedContact, _deleteContact} = props;
  let arrayOfContactRows = [];
  contactInfoList.forEach(contact => {
    arrayOfContactRows.push(<ContactRow key={contact.id} contact = {contact}
      _updateEditedContact = {_updateEditedContact} _deleteContact={_deleteContact}/>)
  })


  return(
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {arrayOfContactRows}
      </tbody>
    </Table>
  )
}
