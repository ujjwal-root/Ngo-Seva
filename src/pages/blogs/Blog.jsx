import React from 'react'
import './blog.css'
import img1 from '../../components/assets/blog1.jpg'
import img2 from '../../components/assets/blog2.jpg'
import img3 from '../../components/assets/blog3.jpg'
import img4 from '../../components/assets/blog4.jpg'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Blog() {
  return (
    <div className='blogs'>
      <h1 className='title-lg'>
      Touching Lives
    </h1>
     
    <div class="card mb-6 border-dark  " style={{maxWidth : '1000px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Food Mall</h5>
        <p class="card-text">Our NGO food mall offers nutritious meals, fresh produce, and essential groceries to underserved communities. Together, we combat hunger and promote food security, one meal at a time.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 days  ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-6 border-dark " style={{maxWidth : '1000px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Bhandara</h5>
        <p class="card-text">Our NGO food mall offers nutritious meals, fresh produce, and essential groceries to underserved communities. Together, we combat hunger and promote food security, one meal at a time.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 2 weeks ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-6 border-dark " style={{maxWidth : '1000px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Janseva</h5>
        <p class="card-text">Our NGO food mall offers nutritious meals, fresh produce, and essential groceries to underserved communities. Together, we combat hunger and promote food security, one meal at a time.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 months ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-6  border-dark" style={{maxWidth : '1000px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img4} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 1 year ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Blog