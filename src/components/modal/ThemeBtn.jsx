import React from 'react'

const ThemeBtn = ({css, text = "", func}) => (
  <button
    className={`bg-white h-10 w-10 rounded-full ${css}`}
    onClick={func}
  >{text}</button>
)

export default ThemeBtn