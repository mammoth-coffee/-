import React from "react";
import FileUploadItem from './FileUploadItem'
import style from './FileUpload.module.css';

function FileUploadBoard({fileListData}) {
    console.log("onBoard", fileListData);

    return (
        <div id={style.filesBoard}>
            {fileListData.map((fileData) => <FileUploadItem key={fileData.fileId} filepath={fileData.path} originalFileName={fileData.originalFileName} uploadDate={fileData.uploadDate} />)}
        </div>
    )
}

export default FileUploadBoard;