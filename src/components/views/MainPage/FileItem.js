import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./MainPage.module.css";

function FileItem(props) {
    // console.log(props)
    // const fileItem = {}
    // for(let element in props) {
    //     if(!props[element]) return

    //     console.log(props[element])
    // }
    const [usualStar, setUsualStar] = useState('block');
    const [clickedStar, setClickedStar] = useState('none');

    const onClickStar = (event) => {
        setUsualStar(usualStar === "block" ? "none" : "block")
        setClickedStar(clickedStar === "none" ? "block" : "none")
    }
    return (
        
        <div className={style.file_item}>
            <Link to="/linkstore" style={{width : "100%", height : "100%"}}>
                    <span className={style.file_type}>
                        <img src="img/file_logo/link_logo.svg" alt="linkIcon"/>
                    </span>
                    <span className={style.file_name}>Weekly Report.docs</span>
                    <span className={style.file_uploader}>
                        <img src="img/mainpage/userImage.png" width="27px" height="27px" alt="userImage"/>
                    </span>
                    <span className={style.file_date}>{props.lastModifiedDate}</span>
                    <span className={style.file_size}>20MB</span>
            </Link>
            <button className={style.file_star}>
                {/* <span className={style.favorite}> */}
                    <img src="img/common_img/star_line.svg" alt="star" className={style.twenty_size} onClick={onClickStar} style={{display : usualStar}} />
                    <img src="img/common_img/star_filled.svg" alt="star" className={style.twenty_size} onClick={onClickStar} style={{display : clickedStar}}/>
                {/* </span> */}
            </button>
            <button className={style.file_bin}>
                <img src="img/common_img/trashbin.svg" alt="trashbin" className={style.twenty_size}/>
            </button>
        </div>
        
    )
}

export default FileItem;

// 정보를 동적으로 받기, svg로 바꾸기, 링크 수정하기