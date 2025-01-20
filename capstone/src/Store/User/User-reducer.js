
const INTIAL_STATE={
      username:null,
}

const USER_DETAILS = {   
      SET_CURRENT_USER:"SET_CURRENT_USER"
}
    

export const UserReducerHook = (state = INTIAL_STATE, action)=>{
      const {type, payload}= action;
      switch(type){
            case USER_DETAILS.SET_CURRENT_USER : return{
            ...state,
            currentUser:payload
            }

            default:
            return state;
      }
}

