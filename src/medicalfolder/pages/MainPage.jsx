
import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Collections from '../components/Collections'
import Events from '../components/events'
import Invetory from '../components/invetory'
const Main = () => {
  return (
    <div>
    
    <Header />
<div className='greenshadow'> </div>
<div className="mar">
       <marquee> Afford Medical Technologies Pvt. Ltd., are incorporated in the year 1997, as a prominent Manufacturer Supplier,
         Trader and Exporter of wide range of medical equipment and other products which includes Anesthesia Workstation Machine, Cardiopulmonary Bypass Machine, Blood Gas Analyzer, Activated Clotting Time Machine, 
         Cardiac Monitor,Hospital Furniture and much more.</marquee>
    </div>
    
    <Banner />
    <div className='greenshadow'> </div>
  
    <Collections />
    <div className='greenshadow'> </div>
    <Invetory /> 
    <div className='greenshadow'> </div>
   <Events />
   <div className='greenshadow'> </div>
    <Footer />
     
     

    </div>
  )
}

export default Main
