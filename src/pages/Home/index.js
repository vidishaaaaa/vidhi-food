import React, { useState } from 'react'
import Footer from '../../Components/common/footer'
import Header from '../../Components/common/Header'
import TabOptions from '../../Components/common/TabOptions'
import HomeFood from '../../Components/common/TabOptions/HomeFood'
import Adds from '../../Components/common/TabOptions/Add'
import Snacks from '../../Components/common/TabOptions/snacks'
// import Addrest from '../Addrest'
// import Login from '../../Components/common/Header/login'


const HomePage = () => {

    const[activeTab , setActiveTab]= useState("Snacks")

  return (
    <div>
      {/* <Login/> */}
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}

      <Footer/>
    </div>
  )
}
const getCorrectScreen=(Tab)=>{
  switch(Tab){
    case "Snacks":
      return <Snacks/>
    case "Home Food":
          return <HomeFood/>
    case "Adds":
          return <Adds/>
    default:
          return <Snacks/>
  }
};

export default HomePage
