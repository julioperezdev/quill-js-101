import React from "react"
import "./HeaderComponent.css"
import { BrowserRouter as Link } from 'react-router-dom'

const HeaderComponent = () =>{
    return (
        <div className="all-links">
            <Link to="/">crear</Link>
            <Link to="/post">Post</Link>
            <Link to="/all">All</Link>
        </div>
    )
}

export default HeaderComponent;