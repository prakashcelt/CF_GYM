import React from "react";
import Achieve from "../achieve";
import Author from "../author";
// import Chapter from "../chapter";
import Chapterpreview from "../chapter-preview";
import Footer from "../global/footer";
import Funfacts from "../fun-fact";
import Header from "../global/Header"; 
import Hero from "../hero";
import Pricing from "../pricing";
// import Testimonial from "../testimonial";

const MainPage = ({header,footer}) => { 
const {menu} = footer;
  return (
    <>
      <Header header={header}/>
      <Hero isBg=""  />
      {/* <Chapter isBg="yes"/> */}
      <Achieve isBg=""/>
      <Pricing isBg=""/>
      <Author isBg=""/>
      <Funfacts isBg=""/>
      <Chapterpreview isBg=""/>
      {/* <Testimonial isBg="yes"/> */}
      <Footer isBg="" menu={menu}/>
    </>  
  );
}

export default MainPage;
