import React, {useState, useEffect} from "react"
import axios from "axios"
import ReactQuill from 'react-quill';
import "./PostRepository.css"

const ParticularPost = () =>{

  const [value, setValue] = useState(false)
  const [list, setList] = useState([])

//   const getAllPost = async() =>{
    
//     await axios.get("/post/getall").then(async response =>{
//         console.log(response.data)
//         setList(response.data)
//         //etiqueta = await convertFromStringToHtml(response.data.text)
//         console.log("el valor es -> "+list)
//         setValue(true)

//     })
    
  useEffect(() =>{
    const search = window.location.search;
    const params = new URLSearchParams(search).toString;
    //const foo = params.get('id');
    console.log(params)
  },[])

  return (
    <div>
        <ReactQuill 
            className = "readonly-style"
            value={"Hola"}
            readOnly={true}
            theme={"bubble"}
            ></ReactQuill>
            {/* <ReactQuill 
            className = "readonly-style"
            value={post.text}
            readOnly={true}
            theme={"bubble"}
            ></ReactQuill> */}
    </div>
  )
}

export default ParticularPost;