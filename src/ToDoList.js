import React, { Component } from 'react';
import Item from './Item';
import Form from './Form';

import './ToDoList.css'

export default class ToDoList extends Component {
    state = {
        text: '',
        list: [],
        index: -1,
    }


    render() {        
        return (
            <div className="container">
                <h1>To Do List</h1>
                <Form />
                <Item />
            </div>
        )
    }
}