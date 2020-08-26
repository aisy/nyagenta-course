import React from 'react'
import { Router } from 'react-router-dom'

import Index from "../pages/index"

const router = (props) => {
  return (
    <>
      <Router path={"/"} component={Index} />
    </>
  )
}

export default router

