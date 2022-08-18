import {React, useRef, useState} from "react";
import style from './Header.module.css'
import { Link } from "react-router-dom";
import {Outlet} from "react-router"
import Notice_contents from "./Notice_contents";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import classNames from 'classnames';
// import useDetectClose from "../../hooks/UseDetectClose";

function Header() {
    const navigate = useNavigate();

    // const dropDownRef = useRef(null);
    // const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

    const [dropDown, setDropDown] = useState('none');
    const [text, setText] = useState('')


    const onClickBell = (event) => {
        setDropDown(dropDown === "block" ? "none" : "block")
    }
    const userId = sessionStorage.getItem('userId');

    const onClickHandler = (e) => {
        setText(e.target.value);
    


        axios.get(`/search?word=${text}&${userId}`)
        .then((response) => {
            if (response.payload.code == 1000) {
                navigate("/search");
                console.log("확인", response);
            } else {
                console.log("확인222", response);
                alert(response.payload.data.message);
            }
        });
    }

    
        







    // if (window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/findpassword' || window.location.pathname === '/resetpassword') return null;


    return(
        <>
            <div id={style.header}>
    
                <div className={style.searching}>
                    <form >
                        <input className={style.search_txt} type="text" value={text} placeholder="Search Contents" />
                        <button className={style.search_button} type="button" onClick={onClickHandler}>
                            <img src = "/img/searchLine.png" />
                        </button>
                    </form>            
                </div>
    
                <div className={style.gnb}>
                    <Link to="/personalprofile" className={style.setup_img}>
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
                        <img className={style.profile_img} src="sessionStorage.setItem('profile', response.payload.result.profile)" />
                        <p className={style.user_name}>{sessionStorage.getItem('memberName')}</p>
                </div>
            </div>

            <Outlet />
        </>
    )

}

export default Header;



