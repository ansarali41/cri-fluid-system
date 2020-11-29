import React from 'react';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            {/* logo section */}
            <div className="text-center">
                <img style={{ width: '300px'}} src="https://i.ibb.co/XbDCGmZ/logo.png" alt=""/>
            </div>

            {/* main header section */}
            <div className="row" >
                <div className="col-md-4 col-sm-4 trophy-section">
                    <img className="img-fluid trophy-img" src="https://i.ibb.co/3Mpq9jY/trophy.png" alt=""/>
                </div>

                <div className="col-md-8 col-sm-8">
                    <h6 className="font-weight-bold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>
                            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                        <img className="img-fluid" src="https://i.ibb.co/WvpG4Ms/banner.png" alt=""/>
                        <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha 	&amp; Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </ul>
                </div>
            </div>

            {/* bottom section */}
            <div style={{ borderBottom: '2px solid #e67863'}}>
                <h6>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h6>

                <img className="img-fluid"src="https://i.ibb.co/x2jQz2j/bottom.png" alt=""/>
                <h6 className="text-center">Valves - Pumps - Pipes - IoT Drives &amp; Controllers - Wires &amp; Cables - Solar Systems - Motors </h6>
            </div>
            {/* footer section */}
            <Footer />
            
        </div>
    );
};

export default Home;

// https://i.ibb.co/XbDCGmZ/logo.png
// https://i.ibb.co/3Mpq9jY/trophy.png
// https://i.ibb.co/WvpG4Ms/banner.png
// https://i.ibb.co/x2jQz2j/bottom.png