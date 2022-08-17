import React, { useState } from 'react'
import style from './LeftNav.module.css'
import { Link } from "react-router-dom";

function MemberFolder(props) {
  
  return (
    <li className={style.sub_folder}>
        <Link to={'/linkstore'} state={{ folderId : props.folderId} }>
            {props.folderName}
        </Link>
    </li>
  )
}

export default MemberFolder
