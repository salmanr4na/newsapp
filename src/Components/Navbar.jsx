import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../Components/style.css" 

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    postData(e) {
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({ search: "" })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-light" to="/">News App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link  text-light" aria-current="page" to="/All" onClick={() => this.props.changeSearch("")}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-light" to="/Politics" onClick={() => this.props.changeSearch("")}>Politics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-light" to="/Education" onClick={() => this.props.changeSearch("")}>Education</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-light" to="/Science" onClick={() => this.props.changeSearch("")}>Science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-light" to="/Technology" onClick={() => this.props.changeSearch("")}>Technology</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-light" to="/Crime" onClick={() => this.props.changeSearch("")}>Crime</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link  text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/Sports" onClick={() => this.props.changeSearch("")}>Sports</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Cricket" onClick={() => this.props.changeSearch("")}>Cricket</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Olympics" onClick={() => this.props.changeSearch("")}>Olympics</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Entertainment" onClick={() => this.props.changeSearch("")}>Entertainment</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Health" onClick={() => this.props.changeSearch("")}>Health</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Economics" onClick={() => this.props.changeSearch("")}>Economics</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/World" onClick={() => this.props.changeSearch("")}>World</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/India" onClick={() => this.props.changeSearch("")}>India</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Corporate" onClick={() => this.props.changeSearch("")}>Corporate</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/IT" onClick={() => this.props.changeSearch("")}>IT</NavLink></li>
                                </ul>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) => this.postData(e)}>
                            <input className="form-control me-2" type="search" name='search' value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <li className="nav-item dropdown list-unstyled mx-2 ">
                                <Link className="nav-link  text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("hi")}>Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("en")}>English</button></li>
                                </ul>
                            </li>
                    </div>
                </div>
            </nav>
        )
    }
}
