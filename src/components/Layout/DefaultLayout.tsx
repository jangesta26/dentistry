import React from 'react'
import { Header } from '../Navbar/Header';
import Footer from '../Footer/Footer';

const DefaultLayout = ({ children }:{children: React.ReactNode;}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer />
    </>
  )
}

export default DefaultLayout
