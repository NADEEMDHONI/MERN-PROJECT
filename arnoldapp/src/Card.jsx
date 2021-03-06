import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "./CardContext";
import { useState } from "react";
import Axios from 'axios';

const Card = (props) => {
const [sum,setSum]=useState(10);
const [isAdding,setIsAdding]=useState(false);
 const {cart,setCart}= useContext(CardContext)
const {product}=props;
 

const addtocart=(event,product)=>{
 if(sum>4){
   setSum(sum-1)
  }else{
    alert('limited product')
    setSum(4)
  }

  const url='/adminorder'
  Axios.post(url,product)
  .then((res)=>{
    console.log(res)
  })


  event.preventDefault();
  console.log(product);
  let _cart={...cart};
  if(!_cart.items){
    _cart.items={}
  }
  if(_cart.items[product._id]){
    _cart.items[product._id]+=1;
  }else{
    _cart.items[product._id]=1;
  }

  if(!_cart.totalItems){
    _cart.totalItems=0;
  }
  _cart.totalItems+=1;
  setCart( _cart);

  setIsAdding(true);
  setTimeout(()=>{
    setIsAdding(false);
  },1000);

  // const cart={
  //   items:{

  //   },
  //   totalItems:
  // }

}
  return (
    <>
    <NavLink className='no-underline' to={`/menu/${product._id}`}>
    <div>
          <img src={product.image}alt='img'/>
         <div className='text-center '>
         <h2 className='text-lg font-bold py-2 '>{product.name}</h2>
          <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{product.model} </span>
        <div>
        <spen className='text-center'>Qty {sum}</spen>
        </div>
          
         </div>
         
<div className='flex justify-between items-center mt-4'>

  <span>₹{product.price}</span>
  <button disabled={isAdding}  onClick={(e)=>{addtocart(e,product)}} className={`${isAdding ? 'bg-green-500':'bg-yellow-500'} py-1 px-4 rounded-full font-bold`}>Add{isAdding ?'ed':'' }</button>
</div>
      </div>
         
    </NavLink>

      
    </>
  );
};

export default Card;
