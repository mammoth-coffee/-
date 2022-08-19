import { LOGIN_USER, REGISTER_USER, AUTH_USER, TEAM_USER, MY_FOLDER, TEAM_FOLDER } from "../_actions/types";
import { ADD_LINK, TRASH_LINK, BMOFF_LINK, BMON_LINK, CHANGE_TITLE } from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        // api : 1
        case LOGIN_USER :
            return {...state, loginSuccess : action.payload}
            break;

        case REGISTER_USER :
            return {...state, registerSuccess : action.payload}
            break;

        case AUTH_USER :
            return {...state, userData : action.payload}    // auth가 response하는 것 : userData json파일, 이걸 받아서 state에 변경 (새로 만듬)
            break;

        // api : 2
        case TEAM_USER :
            return {...state, teammakeSuccess : action.payload}
            break;

        //api 3
        case MY_FOLDER :
            return {...state, myfolderSuccess : action.payload}
            break;
        
        case TEAM_FOLDER :
            return {...state, teamfolderSuccess : action.payload}
            break;
    
        // api : 6
        case ADD_LINK :
            return ({...state, ...action.payload})
            break;

        case TRASH_LINK : 
            return ({...state, ...action.payload})
            break;

        case BMOFF_LINK : 
            return ({...state, ...action.payload})
            break;

        case BMON_LINK : 
            return ({...state, ...action.payload})
            break;

        case CHANGE_TITLE : 
            return ({...state, ...action.payload})
            break;

        // case ADD_FILE :
        //     return ({...state, ...action.payload})
        //     break;
            
        default :
            return state;

        
    }
}