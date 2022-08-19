import React, { useState, useEffect } from "react";
import style from "./RightNav.module.css"
import { Link } from "react-router-dom";
import TeamFolderBoard from './TeamFolderBoard';
import styled from "./TeamModal.module.css";
import axios from 'axios';
import {TeamFolder} from '../../../_actions/user_action'
import { useDispatch } from 'react-redux';




function TeamItem(props) {
    const [teamFolderData, setTeamFolderData] = useState([]);
    const [noLoop, setNoLoop] = useState(false);
    const userId = sessionStorage.getItem('userId');
    

    useEffect(() => {
        axios.get(`http://3.37.214.20:8080/folder/team/${userId}`)
        .then((response) => {
            setTeamFolderData(response.data.result)
            console.log('useEffect', response)
        })
        .catch((err) => console.log('err in useEffect', err))
    },[noLoop]);
    // 페이지 로딩
    const [isOpen, setIsOpen] = useState(false);
    const [arrowOn, setArrowOn] = useState(false);

    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen); // on,off 개념 boolean
    }

    const arrowVisible = () => {
        setArrowOn(arrowOn => !arrowOn);
    }

    const onClickHandler = () => {
        toggleMenu();
        arrowVisible();
    }

    const closeModal = () => {
        handlePopup(false);
    };

    const [popup, handlePopup ] = useState(false);

    /*모달 관련*/
    const Dispatch = useDispatch();
    
    const [Name, setName] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }



    /*팀 생성하기 데이터 보내는*/
    const onSubmitHandler =  (event) => {
        event.preventDefault();
        
    
        let body = {
            
            "folder_case" : "team",
            "id" :sessionStorage.getItem('teamId'),
            "folder_name" : Name,
            "creatorId":sessionStorage.getItem('userId')
    
    
        }
                
        Dispatch(TeamFolder(body))
        .then(response =>{
            

            
    
            if(response.payload.data.code === 1000) {
    
                console.log("확인111", response);
                setNoLoop(!noLoop);
                    
            } else {
                console.log("확인222", response);
                alert(response.payload.data.message);
            
            }
        })
            
    
    }
    




    return (

        <div className={style.TeamListItem} >
            <div className={style.text}>이채원</div>
            <Link to="/teamprofile" className = {style.settingBtn}>
                <img src="/img/setting_navright.svg" />
            </Link>
            <button className={style.yellow} onClick={()=>onClickHandler()}>
                <img src="/img/teamProfile_yellow.svg" />
            </button>
            <button>
                <img src="/img/common_img/plus_icon.svg" className={style.add_folder} onClick={() => { handlePopup(true);} }/>
            </button>
            {popup && 
            <div className={styled.popup} >
                <div className={styled.popupdiv}>
                    <div className={styled.remove} >
                        <img src="/img/common_img/removeImg.png"  onClick={closeModal}/>
                    </div>
                    <div className={styled.nameuser}>
                        <p>내폴더명</p>
                    </div>
                    <div className={styled.nameform}>
                        <form onSubmit={onSubmitHandler}>
                            <div id={styled.name}>
                                <input type="name" name="name"  className={styled.nametxt} id={styled.nameInput} value={Name} onChange={onNameHandler}/>
                            </div>
                            <div id = {styled.buttonname}>
                                <input type="submit" value="폴더 생성하기" id={styled.namebtn} className={styled.namebtn}/>
                            </div>

                        </form>
                    </div>
                </div>
                 
            </div>
            }

            <div className={style.sub_folderlist} id={isOpen ? style.show_menu : style.hide_menu}> 

                <TeamFolderBoard teamFolderData={teamFolderData} noloop = {[noLoop, setNoLoop]} />

            </div>


        </div>

        

    
    )
}

export default TeamItem


//className={style.sub_folderlist} id={isOpen ? style.show_menu : style.hide_menu}