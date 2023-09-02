import React from 'react';
import "../css/ContactUs.css";
import { Sidebar } from '../components/Sidebar';

export const ContactUs = () => {
  return (
    <div className='contact-comp' >
      <Sidebar />
      <div  className='contact-div' >
      <div className='top-bar-head' >
        Contact Us
      </div>
      </div>

    </div>
  )
}
