import React from 'react'
import { Header } from '../Navbar/Header';

const DefaultLayout = ({ children }:{children: React.ReactNode;}) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default DefaultLayout
