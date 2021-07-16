import react from 'react';
import { NavLink } from 'react-router-dom';

const Adminpage=()=>{
    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                <h1>admin page</h1>
                <ul className='d-flex float-right '>
                    <li ><NavLink to='/adminsingup'>AddAdmin</NavLink></li>
                    <li><NavLink to='/login'>Exit</NavLink></li>
                </ul>
                </div>
            </div>
        </div>

</>
    )
}

export default Adminpage;