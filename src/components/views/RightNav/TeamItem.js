import React from 'react'
import style from "./RightNav.module.css"
import { Link } from "react-router-dom";




function TeamItem(props) {
    
    




    return (

        <div className={style.TeamListItem}>
            <div className={style.text}>{props.name}</div>
            <Link to="/teamprofile" className = {style.settingBtn}>
                <img src="/img/setting_navright.svg" />
            </Link>
            <div className={style.yellow}>
                <img src="/img/teamProfile_yellow.svg" />
            </div>
        </div>

        

    
    )
}

export default TeamItem