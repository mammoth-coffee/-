import React from 'react'
import style from './LeftNav.module.css'


function MemberFolderItem(props) {

    //const foldername = sessionStorage.getItem('foldername')
    
  return (
    <div className={style.MyFolderItem}>
        <div className={style.text}>{props.name}</div>
    </div>
  )
}

export default MemberFolderItem