import React from 'react'
import './aboutus.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../components/assets/prs1.jpg';
import img2 from '../../components/assets/prs2.jpg';
import img3 from '../../components/assets/prs3.jpg';

function Aboutus() {
  return (
  <div className='aboutus'>
    <h1 className='title-lg'>
    About us
   </h1>
   <p className='about-p'>Seva NGO, dedicated to eradicating hunger and bringing hope, is a shining example of compassion and social responsibility. Its mission centers on providing nutritious meals to the underprivileged, particularly impoverished and orphaned individuals. With unwavering commitment, Seva NGO not only satisfies immediate hunger but also promotes good health through food drives, soup kitchens, and community gardens. Beyond food, it offers a lifeline of support and a sense of belonging to those in need. This organization, powered by the generosity of donors and the dedication of volunteers, demonstrates the profound impact of collective compassion on society. Seva NGO nourishes both bodies and spirits, offering a brighter future to countless individuals, making an enduring difference in their lives.</p>
   <h1 className='member-lg'>
    Member
   </h1>
   <div class="container marketing">

    
    <div class="row">
      <div class="col-lg-4">
        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
        <img class="bd-placeholder-img rounded-circle" width="160" height="150" src={img2} alt="" srcset="" />
        <h2 class="fw-normal">Aman </h2>
        <p>Aman, dedicated director of Seva NGO, leads with compassion and vision.</p>
        
      </div>
      <div class="col-lg-4">
        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
        <img class="bd-placeholder-img rounded-circle" width="160" height="150" src={img1} alt="" srcset="" />
        <h2 class="fw-normal">Tanvi</h2>
        <p>Tanvi excels as Seva NGO's event manager, orchestrating impactful community initiatives.</p>
        
      </div>
      <div class="col-lg-4">
        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
        <img class="bd-placeholder-img rounded-circle" width="160" height="150" src={img3} alt="" srcset="" />
        <h2 class="fw-normal">Aaditya</h2>
        <p>Aaditya, the social media head, amplifies Seva NGO's impact through online outreach.</p>
       
      </div>
    </div>


    

    

    

  </div>
  </div>
  )
}

export default Aboutus