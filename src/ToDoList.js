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

    handleDelete = (e, index) => {
        let { list } = this.state;
        let newList = [...list]
        newList.splice(index, 1)

        this.setState({
            list: [...newList],
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { list, index } = this.state;
        let { text } = this.state;

        text = text.trim();
        if (text === '') return;
        if (list.indexOf(text) !== -1) return;

        const newList = [...list]        
        if (index === -1) {
            this.setState({
                list: [...newList, text],
                text: ''                
            })            
        } else {
            newList[index] = text;
            this.setState({
                list: [...newList],
                index: -1,
                text: '',
            })
        }
    }
    


    render() {
        const { text, list } = this.state;
        return (            
            <div className="container">
                <h1>To Do List</h1>
                <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} text={text} />
                <Item list={list} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
            </div>
        )
    }
}