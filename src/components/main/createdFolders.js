import React from "react"
import FoldersUI from "./foldersUI"

const CreatedFolders = ({ menuItems, deleteFolder }) => {
  // for delete a folder

  return (
    <div className="wrapper-items">
      {menuItems[0].items?.length > 0 ? (
        menuItems[0].items.map((item) => (
          <FoldersUI item={item} key={item.id} deleteFolder={deleteFolder} />
        ))
      ) : (
        <h2>No folder created</h2>
      )}
    </div>
  )
}

export default CreatedFolders
