import React, { useState, useEffect, useRef } from 'react';
import FileUploadBoard from './FileUploadBoard';
import style from './FileUpload.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addFile } from '../../../_actions/user_action'


const FileUploadPage = () => {

    const Dispatch = useDispatch();

    const [fileListData, setFileListData] = useState([]);

    useEffect(() => {
        axios.get("http://3.37.214.20:8080/folder/6/files")
        .then((response) => {
            console.log("on useEffect_file", response.data)
            setFileListData(...fileListData, response.data.result)
            // 받은 (기존에 서버에 저장되어 있던) response를 linklist에 저장함
            // console.log('여기는 useEffect', linkListData);
        })
        .catch((err) => console.log('err in useEffect', err))
  },[]);


    const [File, setFile] = useState('');
    // const [FileList, setFileList] = useState([]);

    // const fileInput = useRef();


    const onFileHandler = (event) => {
        console.log(event.target.files);
        setFile(event.target.files)
        

    }

    // const onEmbedFileHandler = () => {
    //     setFileList([...FileList, File]);
    // }

    /*const onFileHandler = event => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    }*/

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log("onFileHandler", File);

        let inputFile = {
            "multipartFile":File,
            "folderId":6,
            "memberId":1
        };	
          
        console.log("onSubmit", inputFile);

        Dispatch(addFile(inputFile))
        .then(response => {
            if(response.payload.isSuccess) {
                console.log("Dispatch", response.payload)
                // 이후에 동작이 필요함 (리렌더링?)
            } else {
                console.log("ERROR in AddFile")
            }
        })
        .catch(err => console.log("dispatch", err))
    }


    return(
        <div id={style.contents}>
            <div id={style.contents_wrap}>
                <div id={style.fileStore}>
                    <div id={style.fileAdd}> 

                        <form onSubmit={onSubmit} className={style.upload_input} enctype="multipart/form-data">
                        
                            <input type="file" id="file" onChange={onFileHandler} className={style.fileInput}/>
                            <button type="submit" className={style.fileBtn}>파일 업로드</button>
                            
                            <div className = {style.fileimg}>
                                <img src = "/img/filepage/filechoice.png" />
                            </div>

                        </form>
                    </div>

                    <FileUploadBoard fileListData = {fileListData} />

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
