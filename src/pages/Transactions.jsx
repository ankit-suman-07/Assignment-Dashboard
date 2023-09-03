import React from 'react';
import { useState } from 'react';
import "../css/Transactions.css";
import { Sidebar } from '../components/Sidebar';
import { TransactionDB } from '../helper/TransactionDB';


export const Transactions = () => {
  const [sortArray, setSortedArray] = useState(TransactionDB);
  // const sortedAscending = TransactionDB.sort((a, b) => a.amount - b.amount);
  // const sortedDescending = TransactionDB.sort((a, b) => b.amount - a.amount);

  const sortAscendingAlpha = () => {
    const sortedData = [...TransactionDB].sort((a, b) => a.customer.localeCompare(b.customer));
    setSortedArray(sortedData);
  };

  const sortDescendingAlpha = () => {
    const sortedData = [...TransactionDB].sort((a, b) => b.customer.localeCompare(a.customer));
    setSortedArray(sortedData);
  };

  const sortAscendingNumeric = () => {
    const sortedData = [...TransactionDB].sort((a, b) => a.amount - b.amount);
    setSortedArray(sortedData);
  };

  const sortDescendingNumeric = () => {
    const sortedData = [...TransactionDB].sort((a, b) => b.amount - a.amount);
    setSortedArray(sortedData);
  };

  return (
    <div className='transaction-comp' >
      <Sidebar />
      <div className='transaction-div' > 
      
        <div className='top-bar-head' >
          Transactions
        </div>
        <div className='transaction-sort' >
          <button onClick={sortAscendingAlpha} >A-Z &uarr;</button>
          <button onClick={sortDescendingAlpha} >Z-A &darr;</button>
          <button onClick={sortAscendingNumeric} >Amount &uarr;</button>
          <button onClick={sortDescendingNumeric} >Amount &darr;</button>
      </div>
        <div className='transaction-body' >
        <div className='transaction-row' >
                        <span className='bold' >Amount</span>
                        <span className='bold' >Customer Name</span>
                        <span className='bold' >Reference</span>
                        <span className='bold' >Channel</span>
                      </div>
            
              {
                  sortArray.map((transaction, idx) => {
                    return (
                      <div className='transaction-row' >
                        <span>$ { transaction.amount }</span>
                        <span>{ transaction.customer }</span>
                        <span>{ transaction.refID }</span>
                        <span>{ transaction.channel }</span>
                      </div>
                    );
                  })
              }
            </div>
      </div>
    </div>
  )
}
