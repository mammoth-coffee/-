import React, { useState, useEffect } from "react";
import axios from 'axios';
import MemberFolder from './MemberFolder'
import style from './LeftNav.module.css'
import ModalLeft from "./ModalLeft";
import {Outlet} from "react-router"
function LeftNav(props) {

    const {} =props;
    const [popup, handlePopup] = useState(false);

    const [memberFolderData, setMemberFolderData] = useState([]);


    useEffect(() => {
        axios.get("/folder/member/1")
        .then((response) => {
            setMemberFolderData(response.data.result)
        })
        .catch((err) => console.log('err in useEffect', err))
    },[]);
    // 페이지 로딩

    // wrap을 씌우면 안됨(?) : 색깔 변경이 좌우 양끝까지 해야함
    const [isOpen, setIsOpen] = useState(false);
  
    const [arrowOn, setArrowOn] = useState(false);
    // 화살표
    const [textColor, setTextColor] = useState('#4f4f4f');

    const [boxBackColor, setBoxBackColor] = useState('#fff');

    const [plusVisible, setPlusVisible] = useState('hidden');
    
    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen); // on,off 개념 boolean
    }
    
    const arrowVisible = () => {
        setArrowOn(arrowOn => !arrowOn);
    }

    const onClickHandler = () => {
        arrowVisible();
        setTextColor(textColor === "#4f4f4f" ? "#267DFF" : "#4f4f4f")
        setBoxBackColor(boxBackColor === "#fff" ? "#F6F9FD" : "#fff")
        toggleMenu();
    }

    // if (window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/findpassword' || window.location.pathname === '/resetpassword') return null;
    



    return (
        <>
            <div id={style.side_left}>
                {/* <img className = {style.left_line} src="/img/leftLineGray.png" /> */}

                <div className = {style.helper_logo}>
                    <img className={style.logo_img} src="/img/logoRectangle.png" />
                    <div className = {style.helper_text}>
                        <p>과제헬퍼</p>
                    </div>
                </div>
            
                <div className={style.menu_wrap}>
                    <div className={style.myfolder} style={{backgroundColor:boxBackColor}}>

                        <div className={style.myfolder_btn} onClick={()=>onClickHandler()}>

                            <img src="/img/downarrow_navright.svg" className={style.down_arrow}/>
                            {/* 이게 아래 화살표 */}

                            <img className={style.menu_img} src = "/img/homeLine.png" />
                            {/* fontawesome */}

                            <div className = {style.menu_title} style={{color:textColor}}><p>내 폴더</p></div>
                            {/* 이게 팀 폴더 이름 */}

                        </div>
                        <button>
                            <img src="/img/common_img/plus_icon.svg" className={style.add_folder} onClick={() => { handlePopup(true);} }/>
                        </button>
                        {popup && <ModalLeft onClose={handlePopup}/>}

                    </div>
                        <ul className={style.sub_folderlist} id={isOpen ? style.show_menu : style.hide_menu}>

                            {memberFolderData.map((folderData) => <MemberFolder key={folderData.folderId} folderId={folderData.folderId} folderName={folderData.folderName} />)}

                        </ul>
                        
                    <div className={style.favorites}>

                            <img src="/img/downarrow_navright.svg" className={style.down_arrow}/>
                            {/* 이게 아래 화살표 */}

                            <img className={style.menu_img} src = "/img/common_img/star_line.svg" />
                            {/* fontawesome */}

                            <div className = {style.menu_title}>
                                <p>즐겨찾기</p>
                            </div>
                            {/* 이게 팀 폴더 이름 */}

                    </div>

                    <div className={style.trashbin}>

                            <img src="/img/downarrow_navright.svg" className={style.down_arrow}/>
                            {/* 이게 아래 화살표 */}

                            <img className={style.menu_img} src = "/img/common_img/trashbin.svg" />
                            {/* fontawesome */}

                            <div className = {style.menu_title}>
                                <p>휴지통</p>
                            </div>
                            {/* 이게 팀 폴더 이름 */}

                    </div>
                    
                    
                </div>

            </div>
            <Outlet/>
        </>
        )
    }

export default LeftNav;

{/* <span className={style.down_arrow} id={arrowOn ? style.show_arrow : style.hide_arrow}></span> */}