import React, { useState, useRef, useEffect } from "react"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"
import { useDrag } from "react-dnd"

const FoldersUI = ({ item, deleteFolder, renameFolderHandler }) => {
  // to check weather rename is called
  const [rename, setRename] = useState(false)
  // to hold new name of a function
  const [changedName, setChangedName] = useState(item.name)

  const ref = useRef()
  // for call a function after input box out of fox
  useEffect(() => {
    rename && ref.current.focus()
  }, [rename])

  // for rename a folder on enter and out of focus
  const newNameHandler = (e) => {
    e.preventDefault()
    const newNameValue = !e.target.value ? item.name : e.target.value
    renameFolderHandler(item, newNameValue)
    setRename(false)
  }
  return (
    <div>
      <ContextMenuTrigger id={item.id}>
        <span className="folder-created">
          <img src={item.iconUrl} alt={item.name} />
          {rename ? (
            <input
              value={changedName}
              ref={ref}
              onChange={(e) => setChangedName(e.target.value)}
              onBlur={(e) => newNameHandler(e)}
              onKeyDown={(e) => e.key === "Enter" && newNameHandler(e)}
            />
          ) : (
            <span>{item.name}</span>
          )}
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
          data={{ item }}
          className="menuItem"
          onClick={() => setRename(true)}
        >
          Rename
        </MenuItem>
      </ContextMenu>
    </div>
  )
}

export default FoldersUI
