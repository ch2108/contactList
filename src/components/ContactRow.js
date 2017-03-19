import React, {Component} from 'react';

export default class ContactRow extends Component{

  constructor(props){
    super(props);
      let {contact} = props
    this.state = {
      contact,
      isEditing: false,
      nameField: contact.name,
      phoneNumberField: contact.phoneNumber,
      props: props
    }


    this._toggleEdit = this._toggleEdit.bind(this);
    this._updateNameField = this._updateNameField.bind(this);
    this._updatePhoneNumberField = this._updatePhoneNumberField.bind(this);


  }

  _toggleEdit(){
    if(this.state.isEditing){
      this.state.props._updateEditedContact(this.state.nameField, this.state.phoneNumberField, this.state.contact.id);
    }
    this.setState({
      isEditing: this.state.isEditing ? false : true
    })
  }

  _updateNameField(e){
    this.setState({
      nameField : e.target.value
    })
  }

  _updatePhoneNumberField(e){
    this.setState({
      phoneNumberField : e.target.value
    })
  }

  render(){



    let {contact, isEditing, nameField, phoneNumberField} = this.state;
    let {_toggleEdit, _updateNameField, _updatePhoneNumberField} = this;

    let contactTr;
      if(isEditing){
        contactTr =
        <tr>
          <td><input type="text" value={nameField} onChange={_updateNameField}/></td>
          <td><input type="number" value={phoneNumberField} onChange={_updatePhoneNumberField}/></td>
          <td><button onClick={_toggleEdit}>Done</button></td>
          <td><button onClick={x => this.state.props._deleteContact(contact.id)}>Delete</button></td>
        </tr>

      }else{
        contactTr =
        <tr>
          <td>{contact.name}</td>
          <td>{contact.phoneNumber}</td>
          <td><button onClick={_toggleEdit}>Edit</button></td>
          <td><button onClick={x => this.state.props._deleteContact(contact.id)}>Delete</button></td>
        </tr>
      }




    return(

        contactTr

    )

  }



}
