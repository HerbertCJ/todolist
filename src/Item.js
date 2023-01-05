import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa' 
import PropTypes from 'prop-types'

import './Item.css'

export default function Item({list, handleEdit, handleDelete}) {
    return (
        <ul className="list">
            {list.map((item, index) => (
                <li key={item}>
                    {item}
                    <span>
                        <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
                        <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
                    </span>
                </li>
            ))}
        </ul>
    )
}

Item.propTypes = {
    list: PropTypes.array,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    
}