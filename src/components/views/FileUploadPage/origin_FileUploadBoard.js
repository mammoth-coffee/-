import React from "react";
import FileUploadItem from './FileUploadItem'
import style from './FileUpload.module.css';

function FileUploadBoard(props) {


    return (
        <div id={style.filesBoard}>
            {props.FileList.map((file) => <FileUploadItem key={file} file={file} />)}
        </div>
    )
}

export default FileUploadBoard;