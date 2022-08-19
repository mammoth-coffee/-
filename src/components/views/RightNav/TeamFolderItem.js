import React from 'react'
import style from "./RightNav.module.css"

function TeamFolderItem(props) {
  return (
    <div className={style.MyFolderItem}>
        <div className={style.text}>{props.name}</div>
    </div>
  )
}

export default TeamFolderItem