import React from "react"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"
import CreatedFolders from "./createdFolders"
import { newFolderSrc } from "../../constants"
import { v4 as uuidv4 } from "uuid"
import { useDrop } from "react-dnd"
import "./react-contextmenu.css"

const MainSection = ({ mainMenuData, setMainMenuItems, activeMenu }) => {
  // for create new folder
  const handleClick = (e, data) => {
    const tempData = [...mainMenuData]
    const activeMenuIndex = tempData.findIndex(
      (item) => item.name === activeMenu.name
    )
    // const newFolderLength = tempData[activeMenuIndex].items.filter(item => item.l)
    tempData[activeMenuIndex].items.push({
      name: "New Folder " + new Date().getTime(),
      iconUrl: newFolderSrc,
      altText: activeMenu.name + tempData[activeMenuIndex].items.length,
      id: uuidv4(),
    })
    setMainMenuItems(tempData)
  }
  // for delete a created folder
  const deleteFolder = (e, data) => {
    e.stopPropagation()
    const tempData = [...mainMenuData]
    const activeMenuIndex = tempData.findIndex(
      (item) => item.name === activeMenu.name
    )
    tempData[activeMenuIndex].items = tempData[activeMenuIndex].items.filter(
      (item) => item.id !== data.id
    )
    setMainMenuItems(tempData)
  }
  // all values of active menu item
  const menuItems = mainMenuData.filter((item) => item.name === activeMenu.name)
  // for rename a folder
  const renameFolderHandler = (item, newName) => {
    const tempData = [...mainMenuData]
    const activeMenuIndex = tempData.findIndex(
      (item) => item.name === activeMenu.name
    )
    const currentFolderIndex = tempData[activeMenuIndex].items.findIndex(
      (folder) => folder.id === item.id
    )
    tempData[activeMenuIndex].items[currentFolderIndex].name = newName
    setMainMenuItems(tempData)
  }
  return (
    <section className="main-wrapper">
      <ContextMenuTrigger id="wrapper-id">
        <div className="main-section">
          <CreatedFolders
            menuItems={menuItems}
            deleteFolder={deleteFolder}
            renameFolderHandler={renameFolderHandler}
          />
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
