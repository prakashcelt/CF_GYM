import React from "react";
import Ctav3 from "../ctav3";
import { Link } from "react-scroll";
import { socialLink, siteLogo } from "../../global";
import data from "../../data/footer.json";



const Footer = ({ menu, isBg }) => {
  const { footer } = data;

  return (
    <>
      <div id="contact">
        <Ctav3 />
        <footer
          className={`footer overflow-hidden ${
            isBg === "yes" ? "bg-one" : "bg-two"
          }`}
        >
          <div className="container">
            <div className="footer__top m-50px-t m-50px-b ">
              <div className="row">
                <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-start">
                  <a href="/">
                    <img
                      src={siteLogo.loo}
                      alt="CURVES FITNESS"
                      height={50}
                      width={350}
                    />
                  </a>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
                  <ul className="footer__menu">
                    {menu?.map((data, i) => (
                      <li key={i}>
                        <Link
                          activeClass="active"
                          className="benefits"
                          to={`${data.link}`}
                          spy={true}
                          duration={500}
                          role="button"
                          data-bs-toogle="dropdown"
                          aria-expanded="false"
                          offset={-60}
                        >
                          {data.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-end">
                  <ul className="social-icon">
                    {socialLink.facebook === "" ? (
                      ""
                    ) : (
                      <li>
                        <a href={socialLink.facebook}>
                          <img
                            className="img-fluid"
                            src="assets/icons/facebook.svg"
                            alt="icon"
                            width="25"
                            height="25"
                          />
                        </a>
                      </li>
                    )}

                   

                    {socialLink.whatsapp === "" ? (
                      ""
                    ) : (
                      <li>
                        <a href={socialLink.whatsapp}>
                          <img
                            className="img-fluid"
                            src="assets/icons/whatsapp.svg"
                            alt="icon"
                            width="25"
                            height="25"
                          />
                        </a>
                      </li>
                    )}

                    
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="footer__copyright m-20pxt m-20px-b">
              <div className="row">
                <div className="col-12">
                  <p className="m-0 text-center">
                    &copy; {new Date().getFullYear()} All right reserved. Made
                    with{" "}
                    <img
                      className="img-fluid"
                      src={footer.icon}
                      alt="asd"
                      width="20"
                      height="20"
                    />{" "}
                    by Prakash
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="maps" style={{ height: "200px", width: "100%" , padding:"20px 20px"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.4751352408202!2d77.65555181485922!3d13.132402090750581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1ba764196d1f%3A0x871b87e13dc38966!2sCurves%20Fitness!5e0!3m2!1sen!2sin!4v1676401559779!5m2!1sen!2sin" title="myframe" width={"100%"} height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Footer;
