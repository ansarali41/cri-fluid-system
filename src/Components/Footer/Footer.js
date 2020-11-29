import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <h6 className="text-center py-2"><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></h6>

            <h6>CHEMICALS &amp; PROCESS <span className="right-border"> | </span> POWER <span className="right-border"> | </span> WATER &amp; WASTE WATER <span className="right-border"> | </span> OILS &amp; GAS <span className="right-border"> | </span> PHARMA <span className="right-border"> | </span> SUGARS &amp; DISTILLERIES <span className="right-border"> | </span> PAPER &amp; PULP <span className="right-border"> | </span>MARINE &amp; DEFENCE <span className="right-border"> | </span> METAL &amp; MINING <span className="right-border"> | </span> FOOD &amp; BEVERAGE <span className="right-border"> | </span> PETROCHEMICAL &amp; REFINERIES <span className="right-border"> | </span> SOLAR <span className="right-border"> | </span> BUILDING <span className="right-border"> | </span> HVAC <span className="right-border"> | </span> FIRE FIGHTING <span className="right-border"> | </span> AGRICULTURE &amp; RESIDENTIAL</h6>

            <div className="footer-container">
                <div className="d-flex">
                    <div className="footer-icon">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                        </svg>
                    </div>
                    <div>
                        <p>Toll free <strong>1800 200 1234</strong></p>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="footer-icon-2">
                        <i class="fa fa-facebook"></i>
                    </div>
                    <div>
                        <p>www.facebook.com/cripumps</p>
                    </div>
                </div>


                <div className="d-flex">
                    <div className="footer-icon-3">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-globe2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539a8.372 8.372 0 0 1-1.198-.49 7.01 7.01 0 0 1 2.276-1.52 6.7 6.7 0 0 0-.597.932 8.854 8.854 0 0 0-.48 1.079zM3.509 7.5H1.017A6.964 6.964 0 0 1 2.38 3.825c.47.258.995.482 1.565.667A13.4 13.4 0 0 0 3.508 7.5zm1.4-2.741c.808.187 1.681.301 2.591.332V7.5H4.51c.035-.987.176-1.914.399-2.741zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5H7.5v2.409c-.91.03-1.783.145-2.591.332a12.343 12.343 0 0 1-.4-2.741zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696A12.63 12.63 0 0 1 7.5 11.91v3.014c-.67-.204-1.335-.82-1.887-1.855a7.776 7.776 0 0 1-.395-.872zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964a9.083 9.083 0 0 0-1.565.667A6.963 6.963 0 0 1 1.018 8.5h2.49a13.36 13.36 0 0 0 .437 3.008zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909c.81.03 1.577.13 2.282.287-.12.312-.252.604-.395.872-.552 1.035-1.218 1.65-1.887 1.855V11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5h-2.49a13.361 13.361 0 0 0-.437-3.008 9.123 9.123 0 0 0 1.565-.667A6.963 6.963 0 0 1 14.982 7.5zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855.143.268.276.56.395.872z" />
                        </svg>

                    </div>
                    <div>
                        <p>www.crigroups.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;

// https://i.ibb.co/6RSXX4k/call.jpg
// https://i.ibb.co/Zf0LJSt/fb.png
// https://i.ibb.co/HT0g06W/web.png
