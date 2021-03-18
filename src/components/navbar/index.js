import React from "react"

// for show main menu folders
const NavBar = ({ setActiveMenu, mainMenuData }) => {
  return (
    <section className="nav-wrapper">
      {mainMenuData.map((item) => (
        <div onClick={() => setActiveMenu(item)} key={item.name}>
          <img
            src={item.iconUrl}
            className="nav-images"
            alt={item.alt || item.name || ""}
          />
          {item.name}
        </div>
      ))}
    </section>
  )
}

export default NavBar
