import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container py-3">
    <Link className="navbar-brand text-white fw-bolder " to="Start-Framework">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link ms-5 active text-white fw-bolder fs-5  p-2" aria-current="page" to="About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-5  text-white fw-bolder fs-5 p-2" to="Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-5 text-white fw-bolder fs-5  p-2" to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}
