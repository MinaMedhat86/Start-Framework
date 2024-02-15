import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
<nav class="navbar navbar-expand-lg">
  <div className="container py-3">
    <Link className="navbar-brand text-white fw-bolder " to="/">START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white fw-bolder fs-5  p-2" aria-current="page" to="About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link mx-5 text-white fw-bolder fs-5 p-2" to="Portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bolder fs-5  p-2" to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}