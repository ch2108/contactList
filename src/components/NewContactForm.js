import React, {Component} from 'react';
import uuid from 'uuid';
import {Form} from 'react-bootstrap';

export default class NewContactForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      props,
      nameField: "",
      phoneNumberField: ""
    }

    this._changeNameField = this._changeNameField.bind(this)
    this._changePhoneNumberField = this._changePhoneNumberField.bind(this)
    this._prepareNewContact = this._prepareNewContact.bind(this)

  }

  _changeNameField(str){
    this.setState({
      nameField: str
    })
  }

  _changePhoneNumberField(str){
    this.setState({
      phoneNumberField: str
    })
  }

  _prepareNewContact(){
    let newContact = {name: this.state.nameField, phoneNumber: this.state.phoneNumberField,
                      id: uuid()}
    this.state.props._addNewContact(newContact);
    this.setState({
      nameField: "",
      phoneNumberField: ""
    })
  }

  render(){

    let{nameField, phoneNumberField} = this.state
    let {_changeNameField, _changePhoneNumberField, _prepareNewContact} = this

    return(
      <div>
    <Form onSubmit={function(e){e.preventDefault();_prepareNewContact();}}>
      <fieldset>
        <legend>Add new contact to the list:</legend>
        Name:<br/>
        <input type="text" value={nameField} onChange={function(e){
        _changeNameField(e.target.value)
      }}/><br/>
        Phone Number:<br/>
        <input type="number" value={phoneNumberField} onChange={function(e){
          _changePhoneNumberField(e.target.value)
        }}/><br/>
        <input type="Submit" value="Add"/>
      </fieldset>
    </Form>
</div>
    )
  }
}
