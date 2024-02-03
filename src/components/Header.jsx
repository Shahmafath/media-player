import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand className='fw-bolder' style={{color: 'white', fontSize: '30px'}}>
        {/* here in route, we delete 'href' and then use <Link></Link> to redirect to page */}
      <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>
        <i class="fa-solid fa-angles-up fa-bounce me-2"></i>
          Media Player
      </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header