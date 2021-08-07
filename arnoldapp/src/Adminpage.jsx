import react, { useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Adminpage=()=>{


    const [products,setProducts]=useState([]);

useEffect(()=>{
getList()
},[]);

function getList()
{
    fetch('/adminorder')
.then(response=> response.json()
)
.then(products=>{
  setProducts(products);
 
})
}
const deleteIteam=(id)=>{
    {
        fetch('/adminorder/'+id,{
        
           method:'DELETE',
   
        }).then((result)=>{
            result.json().then((res)=>{
                console.log(res)
                getList()
              

            })
        })
    }
}

    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                <h1 className='text-center'>Admin Page</h1>
                <ul className='d-flex float-right '>
                <button type="button" class="btn btn-danger ">  <li><NavLink  className='text-white no-underline ' to='/login'><ExitToAppIcon/>Exit</NavLink></li></button>
                    
                   
                </ul>
                <ul className='d-flex float-right '>
            
              <button type="button" class="btn btn-success"> <li className='pr-3 ' ><NavLink className='text-white no-underline' to='/adminsingup'><PersonAddIcon/> AddAdmin</NavLink></li></button>
                   
                </ul>


                <div>
                <table className='border-6 solid  black'>
               
    
            <tr>
                
            <th>Name</th>
            <th>Model</th>
            <th>Price</th>
            <th>Remove</th>
           
        </tr>
        {
            products.map(product=>{
                return(
<tr>

<td>{product.name}</td>
<td>{product.model}</td>
<td>{product.price}</td>

<td><button onClick= {()=>{ deleteIteam(product._id)}}   className=' px-2 py-1  text-black '><DeleteIcon/></button></td>

</tr>
            )})
        }
   
</table>
        </div>
             </div>
           </div>
        </div>
        

 </>
    )



}

export default Adminpage;