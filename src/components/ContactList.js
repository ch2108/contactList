import React, { Component } from 'react';
import ContactTable from './ContactTable'
import uuid from 'uuid';
import NewContactForm from './NewContactForm'


export default class ContactList extends Component{
  constructor(props) {
    super(props);
    let contactInfoList= [{name: "Tina", phoneNumber: 4152738497, id: uuid()},
    {name: "Alex", phoneNumber: 4346232343, id: uuid()}];

    this.state = {
       contactInfoList
    }

    this._updateEditedContact = this._updateEditedContact.bind(this)
    this._deleteContact = this._deleteContact.bind(this)
    this._addNewContact = this._addNewContact.bind(this)
  }

  _updateEditedContact(name, phoneNumber, id){
    console.log(name, phoneNumber, id);
    let newList = this.state.contactInfoList.slice();

    newList.forEach(contact => {
      if(contact.id === id){
        contact.name = name;
        contact.phoneNumber = phoneNumber;
      }
    })

    this.setState({
      contactInfoList: newList
    })
  }

  _addNewContact(newContact){
    this.setState({
      contactInfoList: this.state.contactInfoList.concat(newContact)
    })
  }

  _deleteContact(id){
    let newList = this.state.contactInfoList.slice();
    for(let i=0;i<newList.length;i++){
      if(newList[i].id === id){
        newList.splice(i,1)
      }
    }

    this.setState({
      contactInfoList: newList
    })

    // this.setState({
    //   contactInfoList: this.state.contactInfoList.filter(contact => {
    //     contact.id !== id
    //   })
    // })
  }

  render(){

    let {contactInfoList} = this.state;
    let {_updateEditedContact, _deleteContact, _addNewContact} = this;

    return(
      <div>
        <h1>Contact List</h1>
        <ContactTable contactInfoList = {contactInfoList} _updateEditedContact = {_updateEditedContact}
        _deleteContact = {_deleteContact}/>
        <NewContactForm _addNewContact={_addNewContact}/>
      </div>
    )
  }
}
