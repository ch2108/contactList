import React, {Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


import ContactList from './components/ContactList';

render(
  <ContactList />,
  document.getElementById('root')
);
