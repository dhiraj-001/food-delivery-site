import { useState } from 'react'

import './App.css'
import Header from './componenets/header/Header'
import MidPart from './componenets/mid-part/MidPart'
import FoodCtg from './componenets/foot-ctg/FoodCtg'
import Deals from './componenets/deals/deals'
import Process from './componenets/process/Process'
import Feedback from './componenets/feedback/Feedback'

function App() {
  return (
    <>
     <Header/>
     <MidPart/>
     <FoodCtg/>
     <Deals/>
     <Process/>
     <Feedback/>
    </>
  )
}

export default App
