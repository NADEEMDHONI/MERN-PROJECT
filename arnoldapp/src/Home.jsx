import React from "react";
import web from "../src/images/iphone.jpeg";
import Common from "./Common";
import Navbar from './Navbar';
const Home = () => {
  return (
    <>
    <Navbar />
      <Common
        name="Hi.... your business with"
        imgsrc={web}
        visit="/menu"
        btname="Buy Now"
      />
    </>
  );
};

export default Home;
