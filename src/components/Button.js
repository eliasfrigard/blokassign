import React from 'react'

export default function Button({ text, backgroundColor }) {
  const style = {
    height: '50px',
    width: '100%',
    fontSize: '17px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: backgroundColor,
    color: '#002641',
    boxShadow: '0px 0px 15px -2px rgba(0,0,0,0.25)',
  }
  return <input type='button' value={text} style={style}></input>
}
