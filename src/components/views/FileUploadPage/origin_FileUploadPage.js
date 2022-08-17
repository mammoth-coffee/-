import React, { useState, useRef } from 'react';
import FileUploadBoard from './FileUploadBoard';
import style from './FileUpload.module.css';
import axios from 'axios';

const FileUploadPage = () => {

    const [File, setFile] = useState('');
    const [FileList, setFileList] = useState([]);


    const fileInput = useRef();


    const onFileHandler = (event) => {
        setFile(event.currentTarget.value)
        
        
    }

    const onEmbedFileHandler = () => {
        setFileList([...FileList, File]);
    }

    /*const onFileHandler = event => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    }*/

    const onSubmit = async event => {
        event.preventDefault();
        const  formData = new FormData();
        formData.append('file', File);
        axios
            .post("/files", formData)
            .then(res => {
                const { fileName } = res.data;
                console.log(fileName);
            })
            .catch(err => {
                console.error(err);
            });

    
        
    }

    



    return(
        <div id={style.contents}>
            <div id={style.contents_wrap}>
                <div id={style.fileStore}>
                    <div id={style.fileAdd}> 
                        <form onSubmit={onSubmit} className={style.upload_input}>
                        
                            <input type="file" id="file" ref={fileInput}  onChange={onFileHandler} className={style.fileInput}/>
                            <button onClick={onEmbedFileHandler} className={style.fileBtn}>파일 업로드</button>
                            <div className = {style.fileimg}>
                                <img src = "/img/filepage/filechoice.png" />
                            </div>

                        </form>
                    </div>

                    <FileUploadBoard FileList = {FileList} />

                </div>
            </div>
        </div>
    )   
}


export default FileUploadPage;


/*import React, { useState } from 'react';
import axios from 'axios';

const FileUploadPage = () => {

    const [content, setContent] = useState("");
    const [uploadedImg, setUploadedImg] = useState({
        fileName: "",
        fillPath: ""
    });
    
    const fileAdd = () => {
      let file = document.getElementById('fileAdd');
      file.click();
    }
    
    const onChange = (e) => {
        setContent(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("img", content);
        axios
            .post("http://localhost:3001/upload", formData)
            .then(res => {
                const { fileName } = res.data;
                console.log(fileName);
                setUploadedImg({ fileName });
                alert("The file is successfully uploaded");
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
    <>
    <form onSubmit={onSubmit}>
    	<div onClick={fileAdd} id="uploadDiv">
          <input
          id="fileAdd"
          style={{ display: 'none' }}
          type="file"
          onChange={onChange}
          />
        </div>
        <button type="submit">Upload</button>
   </form>
   </>
    )
}


export default FileUploadPage;*/
