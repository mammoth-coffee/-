import { LOGIN_USER, REGISTER_USER, AUTH_USER, TEAM_USER } from "../_actions/types";
import { ADD_LINK, TRASH_LINK, BMOFF_LINK, BMON_LINK } from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER :
            return {...state, loginSuccess : action.payload}
            break;

        case REGISTER_USER :
            return {...state, registerSuccess : action.payload}
            break;

        case TEAM_USER :
            return {...state, teammakeSuccess : action.payload}
            break;

        case AUTH_USER :
            return {...state, userData : action.payload}    // auth가 response하는 것 : userData json파일, 이걸 받아서 state에 변경 (새로 만듬)
            break;


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

        // case ADD_FILE :
        //     return ({...state, ...action.payload})
        //     break;
            
        default :
            return state;

        
    }
}