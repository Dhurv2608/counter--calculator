import React from 'react'
import Button from './Button';
const Layout = (props) => {
  return (
    <div>
      <Button/>
      {props.children}
    </div>
  )
}

export default Layout
