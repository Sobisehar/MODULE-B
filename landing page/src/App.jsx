import React from "react";
import Assignment6 from './Assignment 6/Assignment6';
// import styles from './Assignment6.module.css'
import './App.css'

// const App = ()=>{
//   return(
//     <>
//     <h1>app</h1>
//     <button className="btn btn-dark">submit</button>


    const App = ()=>{
      return(
        <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Offcanvas dark navbar</a> */}
        <img src="src/assets/download.png" alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Home One</a></li>
                  <li><a className="dropdown-item" href="#">Home Two</a></li>
                  <li><a className="dropdown-item" href="#">Home Three</a></li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Instructor</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Signup</a></li>
                  <li><a className="dropdown-item" href="#">Events</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Course</a></li>
                  <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Courses List</a></li>
                  <li><a className="dropdown-item" href="#">Course Single</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Blog
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Blog Single</a></li>
                </ul>
              </li>
                  <li><a className="dropdown-item" href="/contact">Contact</a></li>








            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
{/*                  navbar end */}


<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="src/assets/1.ddb463a076b58bbe0ea3.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="src\assets\2.924b429a0601a89b04e1.jpg" className="d-block w-100" alt="..." />
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



          {/* <div>
            <img className="imgg" src="./assets/1.ddb463a076b58bbe0ea3.jpg" alt="" />
            <h3>Great Quality Cocial Life</h3>
            <h1 className="head">Discover the world of possible university.</h1>
            <button>Admissions</button>
          </div>
          <div>
            <h1>Academics</h1>
          </div>
     */}
        </>
      )
    }
    

//   )
// }
export default App