import React from 'react';

import Navbar from '../components/commons/Navbar';

const LayoutHome = (props) => {
  return (
    <>
      <Navbar title={"Nyagenta"} />
      <div>
        {props.children}
      </div>
    </>
  )
}

export default LayoutHome;