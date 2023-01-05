import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

import './Form.css'

export default function Form({ handleSubmit, handleChange, text }) {
    return (
        <div>
            <form action="#" onSubmit={handleSubmit} className="form">
                <input type="text" onChange={handleChange} value={text} />
                <button type="submit"><FaPlus /></button>
            </form>
        </div>
    )
}

Form.propTypes ={
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}