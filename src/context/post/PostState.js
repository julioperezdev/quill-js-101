import React, {useReducer} from "react"
import PostContext from "./PostContext"
import PostReducer from "./PostReducer"
import axios from "axios"
//import Swal from "sweetalert2"
//import HttpClient from "../../service/axios"


const PostState = (props) =>{

    const initialState = {
        title: null,
        numberClass: null,
        text: null
    }

    const [state, dispatch] = useReducer(PostReducer, initialState)

    const getPostByNumberClass = async(numberClass) =>{

        //const response = await HttpClient.get(`/post/getby/id/${numberClass}`)
        const response = await axios.get(`/post/getby/class/${numberClass}`)
        console.log(response)
        // if(response.data.status === 400){
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: response.data.message,
        //         footer: '<a href>Why do I have this issue?</a>'
        //       })
        // }
        //else if (response.data.status === 200){
            dispatch({
                type: 'GETPOSTBYID',
                payload: response.data
            })
            // Swal.fire({
            //     icon: 'success',
            //     title: 'successful login',
            //     text: response.data.message,
                
             // })
        }
    

    const changeTrue = () =>{
        dispatch({
            type:'CHANGETRUE',
            payload: initialState
        })
    }
    const LogoutUser = () =>{
        dispatch({
            type: 'LOGOUT',
            payload: initialState
        })
        
        
    }

    return (
        <PostContext.Provider value = {{
            title: state.email,
            numberClass: state.token,
            text: state.idRol,
            getPostByNumberClass,
        }}>
            {props.children}
        </PostContext.Provider>
    )

}

export default PostState;