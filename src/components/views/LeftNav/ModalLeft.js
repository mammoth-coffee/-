import React from 'react';
import style from './ModalLeft.module.css'


function ModalLeft(props) {

    const {onClose} = props;
  return (
    <div className={style.popup} >
        <div className={style.popupdiv}>
            <div className={style.remove} >
                <img src="/img/common_img/removeImg.png" onClick={()=> {onClose(false);}}/>
            </div>
        </div>
    </div>
    
  )
}


export default ModalLeft