import React from 'react'
import { Helmet } from 'react-helmet';
import { AddCard } from '../../components/AddCard';
import Footer from '../../components/Footer';
import Navbar from "../../components/Navbar";

const Add = () => {
  return (
    <div>
      <Helmet>
      <title>Add Page</title>
      </Helmet>
        <Navbar/>
        <AddCard/>
        <Footer/>
    </div>
  )
}

export default Add