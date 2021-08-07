import react, { useEffect ,useContext} from 'react'
import web from "../src/images/iphone-12-pro.jpg";
import web2 from "../src/images/download.jpg";
import Navbar from './Navbar';
import Card from "./Card";
import Sdata from "./Sdata";
import { useState } from 'react';
import { CardContext } from './CardContext';
import { useSelector } from 'react-redux';
import selectUser from './features/userSlice'

const Menu=()=>{


  // const {name}= useContext(CardContext);
  const [products,setProducts]=useState([]);

useEffect(()=>{
fetch('/product')
.then(response=> response.json()
)
.then(products=>{
  setProducts(products);
 
})
},[]);



    return(
     
        <>
         <Navbar />,
        <br/>
        <h1 className='menu_h1'>NEW PRODUCT</h1>
        <div className='services_div'>
       
      
        <figure>
            <img className='services_img' src={web}/>
            <figcaption>
            
                <h1>iphone 12pro</h1>
                
                <button type="button" className="btn btn-success mt-3">BUYNOW</button>
            </figcaption>
        </figure>
       
       
        <figure>
            <img className='services_img' src={web2}/>
            <figcaption>
                <h1>iphone 11</h1>
              
                <button type="button" className="btn btn-success mt-3">BUYNOW</button>
            </figcaption>
            
        </figure>
       
        
        <figure>
            <img className='services_img' src={web}/>
            <figcaption>
                <h1>iphone x</h1>
              
                <button type="button" className="btn btn-success mt-3">BUYNOW</button>
            </figcaption>
        </figure>
        
        </div>

        <div className="">
        <h1 className="menu_h1"> Our Product </h1>
      </div>
 
       {/* <div className="container mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-5"> 
              
              {Sdata.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div> */}
      <div  className='container mx-auto pb-24'> 
      <h1 className='text-lg-center font-bold my-8'>product </h1>

      <div className='grid grid-cols-4 my-8 gap-24'>
      {
        products.map(product=><Card key={product._id} product={product}/>)
      }
      
      </div>
      
      </div>


        </>
    );
};
export default Menu;
