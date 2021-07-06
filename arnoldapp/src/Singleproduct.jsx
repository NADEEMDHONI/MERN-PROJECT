import react, { useState ,useEffect} from 'react';
import { useParams,useHistory } from 'react-router-dom';
import Navbar from './Navbar';
const Singleproduct=()=>{

const [product,setProduct]=useState({});
const params=useParams();
const history=useHistory();

useEffect(()=>{
fetch(`/product/${params._id}`)
.then(res=>res.json())
.then(product=>{
    setProduct(product);
    console.log(product)
})
},[params._id]);

    return(
<>
<Navbar />
<div className='container mx-auto mt-12'>
    <button className='mb-12 font-bold' onClick={()=>{history.goBack()}}>Back</button>
    <div className='flex'>
        <img src={product.image} alt="iphone"/>
        <div className='ml-16'>
            <h1 className='text-xl font-bold'>{product.name}</h1>
        <div className='text-md'>{product.model}</div>
        <div className='font-bold mt-2'>₹ {product.price}</div>
        <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Add to cart</button>
        </div>
    </div>
</div>
</>
    )
};

export default Singleproduct;