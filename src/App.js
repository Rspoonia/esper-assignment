import React, { useEffect, useState } from "react"
import NavBar from "./components/navbar"
import "./App.css"
import { mainMenu } from "./constants"
import MainSection from "./components/main"

function App() {
  const [activeMenu, setActiveMenu] = useState(mainMenu[0])
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
