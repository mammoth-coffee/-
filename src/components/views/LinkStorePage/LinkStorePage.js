import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addLink} from '../../../_actions/user_action'
import LinkBoard from './LinkBoard';
import style from './LinkStorePage.module.css';
import { useLocation } from "react-router-dom";


function LinkStorePage () {

    const location = useLocation();
    const Dispatch = useDispatch();
    
    const folderId = location.state.folderId

    const [linkListData, setLinkListData] = useState([]);
    
    const [noLoop, setNoLoop] = useState(false);

    useEffect(() => {
        axios.get(`/folder/${folderId}/links`)
        .then((response) => {
            setLinkListData(response.data.result)
            console.log('useEffect', linkListData)
            // res = ...response;
        })
        .catch((err) => console.log('err in useEffect', err))
    },[noLoop]);
    // 페이지 로딩

    const [Link, setLink] = useState('');
    
    const onLinkHandler = (event) => {
        setLink(event.currentTarget.value)
    }
    // input창의 내용


    const OnEmbedLinkHandler = (event) => {
        event.preventDefault();

        let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if(!regex.test(Link)) {
            console.log("not url");
            setLink("");
            return;    
        }

        let requestLink = {
            "name":"Untitled",
            "url": Link,
            "folderId":folderId,
            "memberId":1
          }	
                

        Dispatch(addLink(requestLink))
        .then(response => { 
            if(response.payload.isSuccess) {
                console.log("Success in AddLink");
                setNoLoop(!noLoop);

            } else {
                console.log('ERROR in AddLink');
            }
        })
        .catch(err => console.log("dispatch", err))

        setLink("");
    }
    // form
    
    return(
        <div id={style.contents}>
            <div id={style.contents_wrap}>
                
                    <div id={style.myFolder}>
                            <span>내폴더</span>
                            <span>Portfolio자료</span>
                    </div>

                    <div id={style.linkStore}>

                        <form onSubmit={OnEmbedLinkHandler} id={style.linkAdd}>
                            <input type="text" onChange={onLinkHandler} id={style.linkInput} value={Link} placeholder=" URL을 붙여 넣으세요(https://...)"/>
                            <button type='submit' id={style.linkBtn}>링크 임베드</button>
                            {/* <button onClick={OnEmbedLinkHandler} id={style.linkBtn}>링크 임베드</button> */}
                        </form>
                        
                        <LinkBoard linkListData = {linkListData} noloop = {[noLoop, setNoLoop]} />
                    </div>
                
            </div>
        </div>
    )
}


export default LinkStorePage;