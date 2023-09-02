import React from 'react';
import "../css/Transactions.css";
import { Sidebar } from '../components/Sidebar';

export const Transactions = () => {
  return (
    <div className='transaction-comp' >
      <Sidebar />
      <div className='transaction-div' > 
      <div className='top-bar-head' >
        Transactions
      </div>
      </div>
    </div>
  )
}
