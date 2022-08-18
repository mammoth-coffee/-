import React, { useState, useRef , useEffect} from 'react';
import Avatar from 'react-avatar';
import style from './PersonalProfilePage.module.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {personalimgUser} from '../../../_actions/user_action'



function PersonalProfilePage(props) {

    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const [File, setFile] = useState('');
    const fileInput = useRef(null)

    
    
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");

    //const [name, setName] = useState ();
    //const [email, setEmail] = useState();


    //let content = null;
    //let contextControl = null;
    //const [topics, setTopics] = useState('');


    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    

    
    
    /*"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"*/



    const Dispatch = useDispatch();
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

    
    
        e.preventDefault();
        
           Dispatch(personalimgUser())
            .then(response =>{

                sessionStorage.setItem('profile', response.payload.result.profile);

              if(response.payload.data.code === 1000) {
                console.log("확인111", response);
                
              } else {
                console.log("확인222", response);
                alert(response.payload.data.message);
                // alert('error occur')
                // alert('error on')
                // console.log(errorMsgRef);
                // errorMsgRef[0].style.display = 'block';
              }
            })        
    }

    /*const navigate = useNavigate();
    useEffect(() => {
        axios.get("/api/hello").then((response) => {
            console.log(response);
        });
    }, []);

    const onClickHandler = () => {
        axios.get("/api/users/logout").then((response) => {
            if (response.data.success) {
                navigate("/login");
            } else {
                alert("로그아웃에 실패했습니다.");
            }
        });
    };*/






return (
    
    <div id={style.contents}>
        <div id={style.contents_wrap}>

            {/*<div className={style.logout}>
                <button className={style.logoutbtn} onClick={onClickHandler}>로그아웃</button>
            </div>*/}

            <div className = {style.profilediv}>
                <Avatar 
                    className = {style.personalprofile}
                    src={Image}
                    style={{margin:50}} 
                    size={240} 
                    /*onClick={()=>{fileInput.current.click()}}*//>

            </div>

            <div id={style.usernamereal}>
                <p>James</p>
            </div>

            <div className = {style.personalbtn}>
                <form action="">
                    <label className={style.label} ref={fileInput} htmlFor="ImgProfile">
                        <div className={style.inner}>
                            <p>프로필 이미지 선택</p>
                        </div> 
                    </label>
                    <input   id='ImgProfile' className = {style.ImgProfile} ref={fileInput} accept='image/jpg,impge/png,image/jpeg' type="file" name='profile_img' onChange={onChange} />
                    
                </form>
            </div>


            {/*<div className = {style.name_email}>
                <div className = {style.personalname}>
                    <form id="edit-form1" action="" method="post">
                        <div className={style.input_name}>
                            <label for="edit-nick">닉네임</label>
                            <input id="edit-nick" type="text" name="edit_nick"/>
                        </div>
                    </form>
                </div>
                <div className = {style.personalemail}>
                    

                </div>
</div>*/}
            

            {/*<form action="." method="post" onSubmit = {event =>{
                event.preventDefault();
                const name = event.target.name.value;
                props.onUpdate(name);
            }}>
                <p><input type="text" name="name" placeholder="name" value={name} onChange= {event=>{
                    setName(event.target.value);}}/></p>
                <p><input type="submit" value="Update"></input></p>
                </form>*/}

            

            <div className={style.nameemail}>
                <div className={style.nameuser}>
                    <p>사용자명</p>
                </div>
                <div className={style.nameform}>
                    <form >
                        <div id={style.name}>
                            <input type="name" name="name"  className={style.nametxt} id={style.nameInput} value={Name} onChange={onNameHandler}/>
                        </div>
                        <div id = {style.buttonname}>
                            <input type="submit" value="수정" id={style.namebtn} className={style.namebtn}/>
                        </div>

                    </form>
                </div>
                
                <div className={style.line}></div>

                <div className={style.emailuser}>
                    <p>이메일</p>
                </div>
                <div className={style.emailform}>
                    <form >
                        <div id={style.email}>
                            <input  name="email"  className={style.emailtxt} id={style.emailInput} value={Email} onChange={onEmailHandler}/>
                            
                        </div>
                        <div id = {style.buttonemail}>
                            <input type="submit" value="수정" id={style.emailbtn} className={style.emailbtn}/>
                        </div>

                    </form>
                </div>
            </div>



            {/*<div className={style.nameform}>
                <form onSubmit={onSubmitHandler}>
                    <div id={style.name}>
                        <input type="name" name="name" placeholder="James" className={style.nametxt} id={style.nameInput} value={Name} onChange={onNameHandler}/>
                    </div>
                    <div id = {style.buttonname}>
                        <input type="submit" value="수정" id={style.namebtn} className={style.namebtn}/>
                    </div>

                </form>
            </div>


            <div className={style.emailform}>
                <form onSubmit={onSubmitHandler}>
                    <div id={style.email}>
                        <input type="email" name="email" placeholder="000000@gmail.com" className={style.emailtxt} id={style.emailInput} value={Email} onChange={onEmailHandler}/>
                    </div>
                    <div id = {style.buttonemail}>
                        <input type="submit" value="수정" id={style.emailbtn} className={style.emailbtn}/>
                    </div>

                </form>
            </div>*/}











            {/*<form onSubmit={event=>{
                event.preventDefault();
                const title = event.target.name.value;
                const body = event.target.email.value;
                props.onCreate(title, body);
            }}>
                <input type="text" name="name" placeholder="James" className={style.name}/>
                <input type="text" name="email" placeholder="00000@gamil.com" className={style.email}/>
                <input type="submit" value="수정" className={style.btn}/>
        </form>*/}
        









            

        </div>
    </div>
            

    )
}

export default PersonalProfilePage



