import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import ReactQuill from 'react-quill';
import "./PostRepository.css"
import {useParams} from "react-router-dom"
import PostContext from "../context/post/PostContext";

const ParticularPost = () =>{


  //const {getPostByNumberClass, title, numberClass, text} = useContext(PostContext)

  const {classNumber} = useParams();
  const [post, setPost] = useState(null)
  const [info, setInfo] = useState(false)

//   const getAllPost = async() =>{
    
//     await axios.get("/post/getall").then(async response =>{
//         console.log(response.data)
//         setList(response.data)
//         //etiqueta = await convertFromStringToHtml(response.data.text)
//         console.log("el valor es -> "+list)
//         setValue(true)

//     })
    
const getPostByNumberClass = async(numberClass) =>{

  //const response = await HttpClient.get(`/post/getby/id/${numberClass}`)
  const response = await axios.get(`/post/getby/class/${numberClass}`)
  console.log(response)
  setPost(response.data)
  setInfo(true)

  }


  useEffect(async() =>{
   await getPostByNumberClass (classNumber)
  },[])

  return (
    <>
      {!info? 
      <p>No ha llegado la informacion</p> :
      <div className="particular-post">
        <h1>{post.title}</h1>
        <h3>leccion #{post.numberClass}</h3>
        <ReactQuill
          className="readonly-style"
          value={post.text}
          readOnly={true}
          theme={"bubble"} />
      </div>}
    </>
  )
}

export default ParticularPost;