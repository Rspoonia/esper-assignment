import React from "react"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"
import { useDrag } from "react-dnd"

const FoldersUI = ({ item, deleteFolder }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "BOX",
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div>
      <ContextMenuTrigger id={item.id}>
        <span className="folder-created" ref={drag}>
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
        <MenuItem
          onClick={(e) => deleteFolder(e, item)}
          data={{ item }}
          className="menuItem"
        >
          Rename
        </MenuItem>
      </ContextMenu>
    </div>
  )
}

export default FoldersUI
