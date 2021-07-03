import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
     
   
          <img src={props.imgsrc} className="imgnadeem" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-capitalize">
              {props.title}
            </h5>
            </div>
            </div>
         
          
      
    </>
  );
};

export default Card;
