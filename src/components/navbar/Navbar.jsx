import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div class="container" style={{ backgroundColor: '#E9B824' }}>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        
        <span class="fs-4">Seva NGO </span>
      </Link>

      <ul class="nav nav-pills">
      <li class="nav-item"  ><Link to="/project" class="nav-link" style={{ color: 'black' }}>Project</Link></li>
        <li class="nav-item" ><Link to="/events" class="nav-link" style={{ color: 'black' }}>Events</Link></li>
        <li class="nav-item"  ><Link to="/aboutus" class="nav-link" style={{ color: 'black' }}>About Us</Link></li>
        <li class="nav-item" ><Link to="/blog" class="nav-link" style={{ color: 'black' }}>Blogs/News</Link></li>
        <li class="nav-item"  ><Link to="/contactUs" class="nav-link" style={{ color: 'black' }}>Contact Us</Link></li>
        
        <li class="nav-item"><Link to="/getInvolved" class="nav-link active" style={{ backgroundColor: 'red' }} aria-current="page">Get Involved</Link></li>
      </ul>
    </header>
  </div>

  
    </div>
  )
}

export default Navbar