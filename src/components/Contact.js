// import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PELoader from "../Screens/Utils/PELoader";
import app from "../firebase";
import { db } from "../firebase";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import SurveyComponent from "./forms/istform";
function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [number, setNumber] = useState();
  const [loader, setLoader] = useState(false);
  // const collRef = collection(db, "contact-form");
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await addDoc(collection(db, "footerfromrecord"), {
        name: name,
        email: email,
        number: number,
        message: message,
        created: Date.now(),
      }).then((val) => {
        setLoader(true);
        navigate("/thanks/" + val.id);
      });
    } catch (error) {
      setLoader(false);
      alert(error);
    }
    localStorage.setItem("formName", name);
    window.setTimeout(() => {
      setLoader(false);
      // navigate(`/thanks/${docRef.id}`);
      // console.log("Document written with ID: ", docRef.id);
    }, 3000);
  };
  return (
    <div className="contact__area contact__plr-2 mt-100 mb-100 p-relative fix">
      {loader && <PELoader />}
      {/* <div className="contact__shape-1 d-none d-lg-block">
        <img src="assets/img/contact/ct-shape-1.png" alt="" />
      </div>
      <div className="contact__shape-2 d-none d-xxl-block">
        <img src="assets/img/contact/ct-shape-2.png" alt="" />
      </div>
      <div className="contact__shape-3 d-none d-xxl-block">
        <img src="assets/img/contact/ct-shape-3.png" alt="" />
      </div>
      <div className="contact__shape-4 d-none d-lg-block">
        <img src="assets/img/contact/ct-shape-4.png" alt="" />
      </div> */}
      <div className="contact__border">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-xl-8 col-lg-7 ">
              {/* <div className="contact__section-title pb-10">
                <h4
                  className="section-subtitle char-anim wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  Get In Contact
                </h4>
                <h3
                  className="section-title char-anim wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  Feel free to get in touch <br />
                </h3>
              </div>
              <div
                className="contact__text wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <p className="char-anim-2">
                  Our experienced team is dedicated to providing personalized
                  solutions for your legal needs.
                </p>
              </div>
              <div
                className="contact__form wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <form onSubmit={formSubmitHandler}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input
                          type="text"
                          placeholder="Your Name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input
                          type="email"
                          placeholder="Your Email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <input
                          type="number"
                          placeholder="Your Number"
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="postbox__contact-textarea">
                        <textarea
                          placeholder="Message"
                          defaultValue={""}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="contact__button wow tpfadeUp pt-50"
                    data-wow-duration=".9s"
                    data-wow-delay="1.1s"
                  >
                    <button
                      className="main-btn-sm tp-btn-hover alt-color"
                      type="submit"
                    >
                      <span>Send Request</span>
                      <b />
                    </button>
                  </div>
                </form>
              </div> */}
              <div style={{marginLeft: 35}}>
                <h4 style={{color: "blue"}}>WE DON'T PROVIDE LOAN / हम लोन नहीं देते*</h4>
              </div>
              <SurveyComponent />
            </div>

            <div className="col-xl-4 col-lg-5" style={{ paddingTop: "48px" }}>
              <div className="contact__left-side">
                <a href="tel:+919821219819">
                  <div
                    className="contact__item d-flex align-items-center wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <div className="contact__icon">
                      <span>
                        <a href="tel:+919821219819">
                          <i className="fal fa-phone-alt" />
                        </a>
                      </span>
                    </div>
                    <div className="contact__content">
                      <h4 className="contact__title-sm">Call Us Now</h4>
                      <span>
                        <a href="tel:+919821219819">
                          +919821219819 <br />
                        </a>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="mailto:info@settleloans.in">
                  <div
                    className="contact__item d-flex align-items-center wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    <div className="contact__icon">
                      <span>
                        <a href="mailto:info@settleloans.in">
                          <i className="fal fa-envelope-open-text" />
                        </a>
                      </span>
                    </div>
                    <div className="contact__content">
                      <h4 className="contact__title-sm">Message Us</h4>
                      <span>
                        <span
                          className="__cf_email__"
                          data-cfemail="ea8b878b98aa878b8386c4898587"
                        >
                          info@settleloans.in
                        </span>
                        {/* <br />
                        <span
                          className="__cf_email__"
                          data-cfemail="186a777a715875797174367b7775"
                        >
                          legal@settleloans.in
                        </span> */}
                      </span>
                    </div>
                  </div>
                </a>
                <a href="mailto:info@settleloans.in">
                  <div
                    className="contact__item d-flex align-items-center wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".9s"
                  >
                    <div className="contact__icon">
                      <span>
                        <a href="#">
                          <i className="fal fa-map-marker-check" />
                        </a>
                      </span>
                    </div>
                    <div className="contact__content">
                      <h4 className="contact__title-sm">Our location</h4>
                      <span>
                        <a href="">
                          Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana
                          122003
                        </a>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
