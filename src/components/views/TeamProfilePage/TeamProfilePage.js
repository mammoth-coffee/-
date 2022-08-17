import React, { useState, useRef , useEffect} from 'react';
import Avatar from 'react-avatar';
import style from './TeamProfilePage.module.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function TeamProfilePage() {

    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const [File, setFile] = useState('');
    const fileInput = useRef(null)

    const [Name, setName] = useState("");


    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onChange = (e) => {
        if(e.target.files[0]){
                setFile(e.target.files[0])
            }else{ //업로드 취소할 시
                setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
                return
            }
        //화면에 프로필 사진 표시
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }



    const onSubmitHandler = (event) => {

        event.preventDefault();
            
        /*let body = {
            email : Email
                
        }*/
                
        
            
        /* Dispatch(loginUser(body))
            .then(response =>{
                if(response.payload.loginSuccess) {
                    navigate('/')
                } else {
                    errorMsgRef.current.style = "visibility: visible"
                    // alert('error occur')
                    // alert('error on')
                    // console.log(errorMsgRef);
                    // errorMsgRef[0].style.display = 'block';
                }
            })*/            
        }






    return (

        <div id={style.contents}>
            <div id={style.contents_wrap}>
                <div className = {style.profilediv}>
                    <Avatar 
                        className = {style.teamprofile}
                        src={Image}
                        style={{margin:50}} 
                        size={240} 
                        /*onClick={()=>{fileInput.current.click()}}*//>
                </div>

                <div id={style.usernamereal}>
                    <p>James</p>
                </div>

                <div className = {style.teambtn}>
                    <form method="post">
                        <label className={style.label} ref={fileInput} htmlFor="ImgProfile">
                            <div className={style.inner}>
                                <p>프로필 이미지 변경</p>
                            </div> 
                        </label>
                        <input id='ImgProfile' className = {style.ImgProfile} ref={fileInput} accept='image/jpg,impge/png,image/jpeg' type="file" name='profile_img' onChange={onChange} />
                
                    </form>
                </div>


                <div className={style.nameemail}>
                    <div className={style.nameuser}>
                        <p>팀폴더명</p>
                    </div>
                    <div className={style.nameform}>
                        <form onSubmit={onSubmitHandler}>
                            <div id={style.name}>
                                <input type="name" name="name" placeholder="UMC 웹런칭 - 과제헬퍼" className={style.nametxt} id={style.nameInput} value={Name} onChange={onNameHandler}/>
                            </div>
                            <div id = {style.buttonname}>
                                <input type="submit" value="수정" id={style.namebtn} className={style.namebtn}/>
                            </div>

                        </form>
                    </div>
                
                    <div className={style.line}></div>


                </div>






            </div>
        </div>
    
    )
}

export default TeamProfilePage