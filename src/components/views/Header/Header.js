import {React, useRef, useState} from "react";
import style from './Header.module.css'
import { Link } from "react-router-dom";
import {Outlet} from "react-router"
import Notice_contents from "./Notice_contents";
// import classNames from 'classnames';
// import useDetectClose from "../../hooks/UseDetectClose";

function Header() {

    // const dropDownRef = useRef(null);
    // const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

    const [dropDown, setDropDown] = useState('none');

    const onClickBell = (event) => {
        setDropDown(dropDown === "block" ? "none" : "block")
    }

    // if (window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/findpassword' || window.location.pathname === '/resetpassword') return null;


    return(
        <>
            <div id={style.header}>
    
                <div className={style.searching}>
                    <form action="." method="post">
                        <input className={style.search_txt} type="text" placeholder="Search Contents" />
                        <button className={style.search_button} type="submit">
                            <img src = "/img/searchLine.png" />
                        </button>
                    </form>            
                </div>
    
                <div className={style.gnb}>
                    <Link to="/linkstore" className={style.setup_img}>
                        {/* 링크 수정 : 세팅으로 */}
                        <img src="/img/setupLine.png" />
                    </Link>
    
                    <div className={style.notice}>
                        <button className={style.bell_img} onClick={() => onClickBell()}>
                            <img src="/img/bellLine.png" />
                        </button>
    
                        <div className={style.notice_board} style={{display : dropDown}}>
    
                            <div className={style.notice_title}>알림</div>
    
                            < Notice_contents />
                            < Notice_contents />
                            < Notice_contents />
                            < Notice_contents />
                            < Notice_contents />
    
                        </div>
    
    
                    </div>
    
                        {/* 링크 수정 : 마이프로필로 */}
                        <img className={style.profile_img} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                        <p className={style.user_name}>{sessionStorage.getItem('memberName')}</p>
                </div>
            </div>

            <Outlet />
        </>
    )

}

export default Header;



