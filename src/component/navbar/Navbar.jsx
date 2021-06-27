import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isMobile, setMobile] = useState(false)

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light nav_section">
        <div className="container">
            <NavLink className="navbar-brand" exact to="/">BDShop</NavLink>
            <button className="mobile_menu_icon" onClick={()=> setMobile(!isMobile)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon">{isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav_menu">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/allproduct">All Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/blog">Blogs</NavLink>
                </li>
            </ul>
            {/* <form className="d-flex">
                <input className="form-control search_input" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn search_btn" type="submit">Search</button>
            </form> */}
            </div>
        </div>
    </nav>
    );
}

export default Navbar;