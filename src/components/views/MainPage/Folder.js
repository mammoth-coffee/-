import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import style from "./MainPage.module.css";
function Folder(props) {

    const [textColor, setTextColor] = useState('#4f4f4f');
    const [usualBox, setUsualBox] = useState('block');
    const [mouseOnBox, setMouseOnBox] = useState('none');
    const onChangeColor = (event) => {
        setTextColor(textColor === "#4f4f4f" ? "#ffffff" : "#4f4f4f");
        setUsualBox(usualBox === "block" ? "none" : "block");
        setMouseOnBox(mouseOnBox === "none" ? "block" : "none");
    }

    // const [showName, setShowName] = useState('');
    // const onShowName = (event) => {
    //     setShowName
    // }

    return (

        <div className={style.folder} onMouseEnter={onChangeColor} onMouseLeave={onChangeColor}>
                            
            <Link to="/linkstore">
                <div className={style.folderContents}>

                    <div className={style.folderHeader}>
                        <p className={style.folderHeader_title} style={{color:textColor}}>{props.folderName}</p>
                        <div className={style.folderHeader_buttons}>
                            <button className={style.Header_button}>
                                <img src="img/mainpage/members_gray.svg" alt="users" style={{display : usualBox}}/>
                                <img src="img/mainpage/members_white.svg" alt="users" style={{display : mouseOnBox}}/>
                            </button>

                            <button className={style.Header_button}>
                                <img src="img/mainpage/3dots_gray.svg" alt="3dots" style={{display : usualBox}}/>
                                <img src="img/mainpage/3dots_white.svg" alt="3dots" style={{display : mouseOnBox}}/>
                            </button>
                            
                        </div>
                    </div>

                    <div className={style.folderusers}>
                        <div className={style.userImage}>
                            <img src="img/mainpage/userImage.png" alt="james" />
                        </div>
                        <div className={style.userImage}>
                            <img src="img/mainpage/userImage.png" alt="tom" />
                        </div>
                        <div className={style.userImage}>
                            <img src="img/mainpage/userImage.png" alt="john" />
                        </div>
                        <div className={style.userImage}>
                            <img src="img/mainpage/userImage.png" alt="lee" />
                        </div>
                    </div>
                                    
                    <div className={`${style.folderInfo} ${style.folderStart}`} style={{ color:textColor}}>
                        폴더생성 : 2022.07.16
                    </div>

                    <div className={`${style.folderInfo} ${style.folderFileNum}`} style={{ color:textColor}}>
                        파일 : 10개
                    </div>

                    <div className={`${style.folderInfo} ${style.folderRecentChange}`} style={{ color:textColor}}>
                        {props.lastModifiedDate}
                    </div>
                </div>            
                <img src="img/mainpage/Rectangle_white.svg" alt="folderBox" style={{display : usualBox}}/>
                <img src="img/mainpage/Rectangle_blue.svg" alt="folderBox" style={{display : mouseOnBox}}/>
            </Link>
                            
        </div>
    )
}

export default Folder;

// 정보를 동적으로 받기, svg로 바꾸기, 링크 수정하기