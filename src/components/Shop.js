
import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'



function Shop() {
  const dispatch = useDispatch();
  const { depositMoney , withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className='container flex justify-content-center align-items-center mt-6'>
      <h1>Deposit/Withdraw Money</h1>
     
        <button className='btn-solid theme-primary ' onClick={()=>{depositMoney(100)}}>+</button>
        <span className=' mx-2'>Update Balance</span>
        <button className='btn-solid theme-primary mx-2'  onClick={()=>{withdrawMoney(100)}}>-</button>
      
    </div>
  )
}

export default Shop