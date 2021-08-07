import React from "react";
import { NavLink } from "react-router-dom";
import allEntry from './Login'
import {selectUser} from './features/userSlice';
import {useSelector} from 'react-redux';
const Common = (props) => {
  const user=useSelector(selectUser)
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6   d-flex flex-column justify-content-center">
               
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Nadeem Iphone's</strong>
                  </h1>
                  <h2 className="my-3">
                  Apple's products are always best 
                 
                  </h2>
                  
                  <div className="mt-3">
                  
                    <NavLink to={props.visit} className="btn-get-started scrollto">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6  header-img ">
                  <img src={props.imgsrc}   className="img-fluid animated"  alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <h1>{user.password}</h1> */}
    </>
  );
};

export default Common;
