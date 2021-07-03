import react, { useEffect } from 'react'
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';

const About=()=>{
    // 
    return(

        <>
        <Navbar />
        <h1>welcome about page</h1>
        <form method="GET">
            <input type='text' />
        </form>
        </>
    );
};
export default About;
