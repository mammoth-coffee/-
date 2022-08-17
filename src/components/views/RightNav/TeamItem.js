import React from 'react'
import style from "./RightNav.module.css"



function TeamItem(props) {
    




    return (

        <div className={style.TeamListItem}>
            <div className={style.text}>{props.name}</div>
            <div className = {style.settingBtn}>
                <img src="/img/setting_navright.svg" />
            </div>
            <div className={style.yellow}>
                <img src="/img/teamProfile_yellow.svg" />
            </div>
        </div>

        

    
    )
}

export default TeamItem