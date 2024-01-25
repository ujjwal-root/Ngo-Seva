import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../components/assets/crs-img1.jpg';
import img2 from '../../components/assets/crs-img2.jpg';
import img3 from '../../components/assets/crs-img3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';


function Home() {
  return (
    <div>
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white'}}>Feeding India</h5>
          <p style={{ color: 'white'}}>Hunger is not a problem. It is an obscenity. How wonderful it is that nobody need wait a single moment before starting to improve the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white'}}>Feeding Poor</h5>
          <p style={{ color: 'white'}}>Poverty is the parent of revolution and crime</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white'}}>Feeding Disabled</h5>
          <p style={{ color: 'white'}}>
          There’s enough on this planet for everyone’s needs but not for everyone’s greed.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 className='title-lg'>
     Nourishing Hope for the Underprivileged
    </h1>
     <p className='texts'>Seva-NGO is dedicated to combating hunger in India by providing nutritious meals to the impoverished. In a nation where millions struggle to secure even a single daily meal, our mission is to offer sustenance, combat malnutrition, and restore hope. Our dedicated volunteers work tirelessly to serve hot meals to underprivileged communities, slums, and remote villages, aiming to create a brighter future and a world where no one goes to bed hungry.</p>
     
      
    </div>
  )
  
}

export default Home