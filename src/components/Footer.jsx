import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
   <div className='container w-100 mt-5' style={{height: '300px'}}>
      <div className="footer-content d-flex justify-content-between">
        <div className="title" style={{width: '400px'}}>
          <h4 className='d-flex'><i class="fa-solid fa-angles-up me-2"></i>Media Player</h4>
          <p style={{textAlign: 'justify'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <span>Code licensed MIT, docs CC BY 3.0.</span><br />
          <span>Currently v5.3.2.</span>
        </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration: 'none'}}><a className='text-decoration-none' href="">Landing Page</a></Link>
          <Link to={'/home'}  style={{textDecoration: 'none'}}><a className='text-decoration-none' href="">Home</a></Link>
          <Link to={'/history'}  style={{textDecoration: 'none'}}><a className='text-decoration-none' href="">Watch History</a></Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4>Guides</h4>
          <a className='text-decoration-none' href="https://react.dev/" target='_blank'>React</a>
          <a className='text-decoration-none' href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
          <a className='text-decoration-none' href="https://www.w3schools.com/react/react_router.asp" target='_blank'>Routing</a>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className="d-flex">
            <input placeholder='Enter Your Mail!' type="text" className="form-control" />
            <button className="btn btn-outline-secondary  ms-2" ><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons mt-3 d-flex justify-content-between">
          <i style={{height: '40px'}} class="fa-solid fa-envelope fa-2x "></i>
          <i style={{height: '40px'}} class="fa-brands fa-twitter fa-2x"></i>
          <i style={{height: '40px'}} class="fa-brands fa-github fa-2x"></i>
          <i style={{height: '40px'}} class="fa-brands fa-facebook fa-2x"></i>
          <i style={{height: '40px'}} class="fa-brands fa-instagram fa-2x"></i>
          <i style={{height: '40px'}} class="fa-brands fa-linkedin fa-2x"></i>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; 2023 Media Player. Built with React.</p>
   </div>
    </>
  )
}

export default Footer