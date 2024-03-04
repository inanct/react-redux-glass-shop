import React from 'react'
import { useDispatch } from 'react-redux'
import { dicreaseAmount, increaseAmount, removeItem } from '../features/basketSlice';

const Product = ({name,price,image,amount}) => {
    const dispatch = useDispatch();
  return (
    <div className='flex flex-row item-center gap-8 px-10'>
        <img src={image} alt={name + "glasses"} className='w-40' />
    <div className='w-1/2 px-10'>
        <p className='text-xl font-medium'>{name}</p>
        <p className='text-lg'>{price.toFixed(2)}</p>
        <button className='text-red-500 tracking-wide pt-1 pb-2' onClick={()=> {dispatch(removeItem({name}))}}>
            Remove</button>
    </div>
    <div className='flex flex-col items-center'>
        <p className='text-lg font-medium'>Amount</p>
        </div>
        <div className='flex flex-row items-center gap-4 text-gray-600'>
        <button className='text-lg' onClick={()=> {
            if (amount===1 ) {
                dispatch(removeItem({name}));
                return;
            }
            dispatch(dicreaseAmount({name}))}}>-</button>
         <p>{amount}</p>
        <button className='text-lg' onClick={()=> {dispatch(increaseAmount({name}))}}>+</button>
        </div>
    

    </div>
  )
}

export default Product