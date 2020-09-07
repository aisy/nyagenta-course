import React from 'react';

import Navbar from '../components/commons/Navbar';
import Footer from '../components/commons/Footer';

const LayoutHome = (props) => {
  return (
    <>
      <Navbar title={"Nyagenta"} />
      <div>
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default LayoutHome;