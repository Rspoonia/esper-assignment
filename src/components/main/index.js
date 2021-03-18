import React from "react"
import { newFolderSrc } from "../../constants"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"
import CreatedFolders from "./createdFolders"

const MainSection = () => {
  const handleClick = (e, data) => {
    e.stopPropagation()
    console.log("data", data)
  }
  return (
    <section className="main-wrapper">
      <ContextMenuTrigger id="wrapper-id">
        <div className="main-section">
          <CreatedFolders />
        </div>
      </ContextMenuTrigger>
      <ContextMenu className="menu" id="wrapper-id">
        <MenuItem
          onClick={handleClick}
          data={{ item: "Home" }}
          className="menuItem"
        >
          Create
        </MenuItem>
      </ContextMenu>
    </section>
  )
}

export default MainSection
