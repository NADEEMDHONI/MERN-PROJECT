import react, { useEffect } from 'react'
import Navbar from './Navbar';
import { NavLink, useHistory } from 'react-router-dom';
import img from './images/iphone-12-pro.jpg'
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { FaTruck} from "react-icons/fa";
import { GrServices } from "react-icons/gr";


const About=()=>{
    // 

    
    return(

        <>
        <Navbar />
      
      
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-10 mx-auto'>
                  <h1 className='menu_h1'>About</h1>
         <div className='maindiv'> </div> 
      
                  </div>
              </div>
          </div>
           <div className='container'>
               <div className='row'>
               <h1 className='menu_h1 mt-3' >About iphon's</h1>
                   <div className="col-10 mt-2 mx-auto">
                   <p className='about_p'>The iPhone is the first smartphone designed and marketed by Apple Inc. After years of  it rumorsspeculation, it was officially announced in January 2007, and was released in the United  in June. Development of the iPhone as a product began in 2005 and continued in complete secrecy until its public unveiling Apple created the device during a secretive and unprecedented collaboration with Cingular Wireless, now part of AT&T. The development cost of the collaboration was estimated to have been $150 million[14] over a thirty-month period. Apple rejected the "design by committee" approach that had yielded the Motorola ROKR E1, a largely unsuccessful collaboration with Motorola. Instead, Cingular Wireless gave Apple the liberty to develop the iPhone's hardware and software in-house.[15][16] The original iPhone was introduced by Steve Jobs on January 9, 2007 in a keynote address at the Macworld Conference & Expo held in Moscone West in San Francisco, California.[11] In his address, Jobs said, "This is a day, that I have been looking forward to for two and a half years", and that "today, Apple is going to reinvent the phone."[17] Jobs introduced the iPhone as a combination of three devices: a "widescreen iPod with touch controls"; a "revolutionary mobile phone"; and a "breakthrough Internet communicator</p>
                    </div>
               </div>
           </div>
          <div className='container-fluid'>
              <div className='row'>
              <h1 className='menu_h1'>
                  Top product
              </h1>
                  <div className='col-5 mx-auto '>
                      
                      <img src={img} alt=''/>
      
                  </div>
                  <div className='col-5  mx-auto'>
                     
                      <h1 className='menu_h1 mt-20'>iphone 12pro</h1>
                      <p className='about_p' >iPhone 12 Pro mobile was launched on 13th October 2020. The phone comes with a 6.10-inch touchscreen display with a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). The iPhone 12 Pro supports wireless charging, as well as proprietary fast charging.iPhone 12 Pro is based on iOS 14 and packs 64GB of inbuilt storage. The iPhone 12 Pro is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and eSIM cards. The iPhone 12 Pro measures 146.70 x 71.50 x 7.40mm (height x width x thickness) and weighs 189.00 grams. It was launched in Gold, Graphite, Pacific Blue, and Silver colours. It features an IP68 rating for dust and water protection</p>
                      <Button variant="contained" color="primary" >
                      <NavLink  className='btn_about' to='/menu'> <ThemeProvider/> BuyNow</NavLink>
          
        </Button>
                  </div>
              </div>
          </div>
          {/* <div className='container'>
              <div className='row'>
                  <div className='col-4'>
                  <div className='icon' >
                  <FaTruck/>
                  </div>
                
                  </div>
                  <div className='col-4'>
                    <GrServices/>
                  </div>
                  <div className='col-4'>

                  </div>
                  
              </div>
          </div> */}
        </>
    );
};
export default About;
