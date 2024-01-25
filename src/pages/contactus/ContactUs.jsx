import React from "react";
import "./contactUs.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function ContactUs() {
  return (
    <div>
      <h1 className="title-lg">Contact us</h1>
      <CardGroup>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title>Helpline No.</Card.Title>
            <Card.Text>1800-180-1800</Card.Text>
          </Card.Body>
          {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title>General Queries</Card.Title>
            <Card.Text>headoffice@ngoseva.org</Card.Text>
          </Card.Body>
          {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title>Volunteer</Card.Title>
            <Card.Text>hr@ngoseva.org</Card.Text>
          </Card.Body>
          {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
      </CardGroup>

      <div className="address">
        <div className="address-text">
          <h2>Head Office</h2>
          <h3>NGO Seva</h3>
          <p>VIT Vellore</p>
          <p>Tamil Nadu 632014</p>
          <p>headoffice@ngoseva.org</p>
          <p>1800-180-1800</p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.082161080664!2d79.14853172491735!3d12.96922315160857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1697040870984!5m2!1sen!2sin"
            width="600"
            height="350"
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
