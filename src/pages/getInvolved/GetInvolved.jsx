import React from 'react'
import img from '../../components/assets/getInvolved.jpg'
import { Link } from 'react-router-dom'

function GetInvolved() {
  return (
    <div>
      <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={img} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Feed the hungry; be the change today</h1>
        <p class="lead">Change lives: volunteer, donate. Your actions matter. Together, we can combat hunger and make our community a better place. Join us now</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-danger btn-lg px-4 me-md-2"><Link style={{color : 'white',textDecoration :"none"}} to="/donate">Donate</Link></button>
          <button type="button" class="btn btn-warning btn-lg px-4"><Link style={{color : 'black',textDecoration :"none"}} to="/forms">Volunteer</Link></button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default GetInvolved