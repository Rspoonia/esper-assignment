import React from "react"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"

const FoldersUI = ({ item, deleteFolder }) => {
  return (
    <div>
      <ContextMenuTrigger id={item.id}>
        <span className="folder-created">
          <img src={item.iconUrl} alt={item.name} />
          <span>{item.name}</span>
        </span>
      </ContextMenuTrigger>
      <ContextMenu className="menu" id={item.id}>
        <MenuItem
          onClick={(e) => deleteFolder(e, item)}
          data={{ item }}
          className="menuItem"
        >
          Delete
        </MenuItem>
      </ContextMenu>
    </div>
  )
}

export default FoldersUI
