import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li onClick={onClick} style={{
    textDecoration: completed ? 'line-through' : 'none'
  }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  Onclick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo