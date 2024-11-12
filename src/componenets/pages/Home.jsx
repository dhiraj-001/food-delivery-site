// import { Navbar } from "@material-tailwind/react";
import Deals from "../deals/deals";
import Delivery from "../delivery/Delivery";
import Feedback from "../feedback/Feedback";
import FoodCtg from "../foot-ctg/FoodCtg";
import { FooterWithSocialLinks } from "../Footer/Footer";
import Header from "../header/Header";
import MidPart from "../mid-part/MidPart";
import Process from "../process/Process";
// import Navbar from "../navbar/navbar";


function Home() {


  return (
     
    <>
     {/* <Navbar/> */}
     <Header/>
     <MidPart/>
     <FoodCtg/>
     <Deals/>
     <Process/>
     <Feedback/>
     <Delivery/>
     <FooterWithSocialLinks/>
    </>
  )
}

export default Home;