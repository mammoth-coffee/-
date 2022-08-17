import Axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER, TEAM_USER } from './types'
import { ADD_LINK, TRASH_LINK, BMOFF_LINK, BMON_LINK, CHANGE_TITLE, ADD_FILE } from './types'

export function loginUser(dataToSubmit) {
    
    const request = Axios.post("/member/sign-in", dataToSubmit)
    .then(response => response.data)
    // request = response.data
    return {
        type : LOGIN_USER,
        payload : request
    }
    // loginUser라는 함수의 반환값 : {type : "login_user", payload:response.data}
}

export function registerUser(dataToSubmit) {
    
    const request = Axios.post('/member/register', dataToSubmit)

    .then(response => response.data)
    return {
        type : REGISTER_USER,
        payload : request
    }
    // request의 응답값 : 
}


export function teamUser(dataToSubmit) {
    
    const request = Axios.post('/team', dataToSubmit);


    request.then(response => response.data)

    return {
        type : TEAM_USER,
        payload : request
    }
}

export function auth() {

    const request = Axios.get('/api/users/auth')    // get은 body가 필요 없음

    return {
        type : AUTH_USER,
        payload : request
    }
}



export function addLink(dataToSubmit) {

    const request = Axios.post("/folder/link", dataToSubmit)
    .then(response => response.data)

    return {
        type : ADD_LINK,
        payload : request
    }
}
// linkstorepage에 있음

export function trashLink(linkId) {

    const request = Axios.patch(`/folder/link/trash/${linkId}/1`)
    // /folder/link/trash/:linkId/:memberId
    .then(response => response.data)

    return {
        type : TRASH_LINK,
        payload : request
    }

}
// linkstorepage에 있음
// memberid 해결필요

export function bookmarkOff(bookmarkId) {

    const request = Axios.delete(`/bookmark/${bookmarkId}`)
    // /bookmark/:bookmarkId
    .then(response => response.data)

    return {
        type : BMOFF_LINK,
        payload : request
    }
}
// linkitem에 있음

export function bookmarkOn(linkId) {

    const request = Axios.post(`/folder/link/bookmark/6/${linkId}/1`)
    
    .then(response => response.data)

    return {
        type : BMON_LINK,
        payload : request
    }
}

// linkitem에 있음
// memberid 해결필요

export function changeTitle(dataToSubmit, linkId) {

    const request = Axios.patch(`/folder/link/${linkId}`, dataToSubmit)
    .then(response => response.data)

    return {
        type : CHANGE_TITLE,
        payload : request
    }
}

export function addFile(dataToSubmit) {

    const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
    };
    const request = Axios.post("http://3.37.214.20:8080/folder/file", dataToSubmit, config)
    .then(response => response.data)

    return {
        type : ADD_FILE,
        payload : request
    }
}