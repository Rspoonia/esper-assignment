import React, { useEffect, useState } from "react"
import NavBar from "./components/navbar"
import "./App.css"
import { mainMenu } from "./constants"
import MainSection from "./components/main"

function App() {
  /**
   * for track user folder location
   */
  const [activeMenu, setActiveMenu] = useState(mainMenu[0])
  /**
   * for store user folders data
   */
  const [mainMenuData, setMainMenuItems] = useState([...mainMenu])

  return (
    <div className="App">
      <h2>{activeMenu.name}</h2>
      <div className="wrapper">
        <NavBar setActiveMenu={setActiveMenu} mainMenuData={mainMenuData} />
        <MainSection
          mainMenuData={mainMenuData}
          setMainMenuItems={setMainMenuItems}
          activeMenu={activeMenu}
        />
      </div>
    </div>
  )
}

export default App
