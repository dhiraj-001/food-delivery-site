import Deals from "../deals/deals";
import Delivery from "../delivery/Delivery";
import Feedback from "../feedback/Feedback";
import FoodCtg from "../foot-ctg/FoodCtg";
import { FooterWithSocialLinks } from "../Footer/Footer";
import Header from "../header/Header";
import MidPart from "../mid-part/MidPart";
import Process from "../process/Process";



function Home() {


  return (
     
    <>
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