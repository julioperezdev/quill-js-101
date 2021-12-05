import {GET_POST_BY_ID} from "../types"

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_POST_BY_ID:
            localStorage.setItem("title", payload.title);
            localStorage.setItem("numberClass", payload.numberClass);
            localStorage.setItem("text", payload.text);
            return{
                ...state,
                title: payload.title,
                numberClass: payload.numberClass,
                text: payload.text
                
            }
        default:
            return state;
    }
}