import React, {useState, useEffect} from "react"
import axios from "axios"
import ReactQuill from 'react-quill';
import "./PostRepository.css"

import { BrowserRouter as  Redirect, Link } from 'react-router-dom'
import ParticularPost from "./ParticularPost";

const PostRepository = () =>{

  const [value, setValue] = useState(false)
  const [read, setRead] = useState(false)
  const [list, setList] = useState([])

  const getAllPost = async() =>{
    
    await axios.get("/post/getall").then(async response =>{
        console.log(response.data)
        setList(response.data)
        //etiqueta = await convertFromStringToHtml(response.data.text)
        console.log("el valor es -> "+list)
        setValue(true)

    })
    
  }


  const readPost = ()=>{
      setRead(true)
  }

  useEffect(async() => {
    await getAllPost()
  }, [])

  return (
    !value ? <p>No hay datos</p> : 
    <div>
        {list.map(particular => (
            //!read ?
            <div>
                <h1>{particular.title}</h1>
                <h3>{particular.numberClass}</h3>
                {/* <button
                onClick={() => readPost(particular.numberClass)}>leer</button> */}
                <Link to={"/particular-blog/"+particular.numberClass}>leer</Link>
            </div>
            //: 
            //<Redirect to="/particular-blog"/>
            // <ReactQuill 
            // className = "readonly-style"
            // value={particular.text}
            // readOnly={true}
            // theme={"bubble"}
            // ></ReactQuill>
        ))}
    </div>
  )
}

export default PostRepository;