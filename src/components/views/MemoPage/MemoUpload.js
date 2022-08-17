// import '../App.css';
import style from './MemoUpload.module.css'
import MemoPreview from './MemoPreview';
import React, { useRef, useEffect, useState } from 'react';


function MemoUpload() {

    const [uploadedMemos, setUploadedMemos] = useState([]);
    const [previewMemos, setPreviewMemos] = useState([]);



    const [countList, setCountList] = useState([0]);
    const [textValue, setTextValue] = useState("");
    const [titleValue, setTitleValue] = useState("");

      
    const onAddDetailDiv = () => {
      let countArr = [...countList]
      let counter = countArr.slice(-1)[0]
      counter += 1
      countArr[counter] = counter;
      setCountList(countArr)
    }


    // const handleSetTitleValue = (e) => {
    //     setTitleValue(e.target.value);
    //   };

    // const handleSetTextValue = (e) => {
    //     setTextValue(e.target.value);
    //   };

  return (
        <div id={style.contents}>
            <div id={style.contents_wrap}>
                <div className = {style.container}>
                    {/* <div className={style.MemoContainer}>
                        <form method='post'>
                            <div className={style.TitleInput}>
                                <input type="text" placeholder="제목" value={titleValue} name="title" onChange={(e) => handleSetTitleValue(e)} className={style.MemoTitle}></input>
                            </div>
    
                            <div className={style.TextInput}>
                                <textarea type="text" placeholder="메모를 입력하세요..." value={textValue} name="text" onChange={(e) => handleSetTextValue(e)} className={style.MemoText} rows="4"></textarea>
                            </div>
    
                            <div className={style.MemoBtnContainer}>
                                <input type="button" value="확인" className={style.MemoBtn} onClick={onAddDetailDiv} />
                            </div>
                        </form>
                    </div> */}
    
                    <button className={style.MemoBtn} onClick={onAddDetailDiv}>
                        <img src="/img/img+memo/uploadmemo.png" />
                        <div>
                            메모 작성하기
                        </div>
                    </button>
                
                    <MemoPreview countList={countList}/>
                
                </div>
            </div>
        </div>

  );
}


export default MemoUpload;
