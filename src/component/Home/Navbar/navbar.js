import React from 'react'
import './navbar.css'

const NavbarHome = () => {
  return (
    <div>
      <div className="navbar  " light expand="md">
      <nav class="navbar navbar-expand-lg bg-body-primary ">
        <div class="container-fluid">
        <a className="navbar-brand" style={{ marginTop:'-1rem' , marginBottom:'-1rem'}} href="#"><img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foleo-logo.c4384a46.png&w=256&q=75" alt=""/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"  id="navbarSupportedContent">
            <ul class="navbar-nav me-auto  mb-lg-0 " id="navbar-nav" >
                <li class="nav-item">
                    <a class="nav-link active" style={{color:'#FFC107'}}  aria-current="page" href="#">Biz haqimizda</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" style={{color:'#FFC107'}} aria-current="page" href="#">MAhsulotimiz</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" style={{color:'#FFC107'}} aria-current="page" href="#">Yangiliklar</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" style={{color:'#FFC107'}} aria-current="page" href="#">Aloqa</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active"style={{color:'#FFC107'}} aria-current="page" href="#">Nega biz</a>
                  </li>
                  
              
            </ul>
            <div className="d-flex" >
              <select name="genre"  className="genre" > 
                  <option value="all genres">EN</option>
                  <option value="adventure">UZ</option>
                  <option value="biography">RU</option>
              </select>
              <button class="btn btn-outline-warning "  type="submit">93 818 81 77</button>
            </div>
          </div>
        </div>
        </nav>
    </div>
    </div>
  )
}

export default  NavbarHome
