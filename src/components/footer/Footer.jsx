import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './footer.css'

function Footer() {
  return (
    <div>
      <div class="footer-dark" >
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Events</h3>
                        <ul>
                            <li><a href="./">Feeding India</a></li>
                            <li><a href="./">Gandhi Jayanti</a></li>
                            <li><a href="./">Stationery and Clothes Distribution</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="./">Company</a></li>
                            <li><a href="./">Team</a></li>
                            <li><a href="./">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Seva NGO</h3>
                        <p>Seva NGO is dedicated to alleviating hunger and poverty by supplying nutritious meals to those in need. Our mission is to create a hunger-free community through compassionate outreach.</p>
                    </div>
                    {/* <div class="col item social"><a href="./"><i class="icon ion-social-twitter"></i></a><a href="./"><i class="icon ion-social-snapchat"></i></a><a href="./"><i class="icon ion-social-instagram"></i></a></div> */}
                </div>
                <p class="copyright">Seva NGO © 2023</p>
            </div>
        </footer>
    </div>
   </div>
      
  );
}

export default Footer;
