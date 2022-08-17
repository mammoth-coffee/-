// import '../App.css';
import style from './MemoUpload.module.css'
import React, { useState } from 'react';

function MemoPreview(props) {

    const memoDelete = () => {
        {props.countList && props.countList.map((item, i) => (
            console.log(i)
            ))}
    }

    return (
        <div className={style.preview_container} draggable>
            {props.countList && props.countList.map((item, i) => (
            <div key={i} className={style.MemoPreview}>
                <div className={style.TitleInput}>
                    <input type="text" placeholder="제목" name="title" className={style.MemoTitle}></input>
                </div>
                <div className={style.TextInput}>
                    <textarea type="text" placeholder="메모를 입력하세요..." name="text" className={style.MemoText} rows="6"></textarea>
                </div>
                <div className={style.IconContainer} >
                
                    <img className={style.StarIcon} src='/img/img+memo/gray_star.png' />
                    <img className={style.TrashIcon} src='/img/img+memo/gray_trashbin.png' onClick={memoDelete} />
                </div>
            </div>
            ))}
        </div>

    );
}

export default MemoPreview;