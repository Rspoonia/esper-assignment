import React from "react"
import { newFolderSrc } from "../../constants"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"

const CreatedFolders = () => {
  const deleteFolder = (e, data) => {
    e.stopPropagation()
    console.log("data", data)
  }

  return (
    <div>
      <ContextMenuTrigger id="add_same_id">
        <img src={newFolderSrc} alt="hello" />
        <img src={newFolderSrc} alt="hello" />
      </ContextMenuTrigger>
      <ContextMenu className="menu" id="add_same_id">
        <MenuItem
          onClick={deleteFolder}
          data={{ item: "delete" }}
          className="menuItem"
        >
          delete
        </MenuItem>
      </ContextMenu>
    </div>
  )
}

export default CreatedFolders
