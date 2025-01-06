import React, { useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "../components/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SocialHeader from "../components/socialheader";
function About() {
  // if(true){
  // return <Navigate to="/"  />;

  // }
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure the video is muted
      videoRef.current.play();
    }
  }, []);
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset the video time to the beginning
      videoRef.current.play(); // Start playing the video again
    }
  };
  return (
    // <>
    //   <a href="https://api.whatsapp.com/send/?phone=919821219819&text&type=phone_number&app_absent=0" class="float" target="_blank">
    //     <i class="fab fa-whatsapp xl"></i>
    //   </a>
    //   <SocialHeader />
    //   <Header />
    //   <div className="about-5__area about-5__plr ">
    //     <div className="container-fluid pt-24">
    //       <div className="about-5__border">
    //         <div className="row">
    //           <div
    //             className="col-xl-5 col-lg-5 wow tpfadeUp"
    //             data-wow-duration=".9s"
    //             data-wow-delay=".3s"
    //           >
    //             <div className="about-5__main-img text-center text-lg-start">
    //               <a href="#">
    //                 <img src="./assets/aboutImage.png" alt="" />
    //               </a>
    //             </div>
    //           </div>
    //           <div className="col-xl-7 col-lg-7">
    //             <div className="about-5__content-box">
    //               <h4
    //                 className="about-5__content-title wow tpfadeUp"
    //                 data-wow-duration=".9s"
    //                 data-wow-delay=".5s"
    //               >
    //                 About Us:
    //               </h4>
    //               <div className="about-5__content">
    //                 <div
    //                   className="about-5__text wow tpfadeUp"
    //                   data-wow-duration=".9s"
    //                   data-wow-delay=".7s"
    //                 >
    //                   <p>
    //                     Dealing with debt can have a significant impact on your
    //                     mental and emotional well-being. It can lead to feelings
    //                     of hopelessness, anxiety, and depression, making it
    //                     difficult to concentrate on other important aspects of
    //                     your life, such as work or relationships. Moreover, the
    //                     constant pressure of being in debt can strain your
    //                     personal relationships, leading to further stress and
    //                     isolation.
    //                   </p>
    //                   <p>
    //                     However, seeking help from Settleloans can provide you
    //                     with much-needed relief. We understand the challenges of
    //                     being in debt and the impact it can have on your life.
    //                     Our team is dedicated to providing you with
    //                     comprehensive debt management solutions tailored to your
    //                     unique needs, so you can regain control of your finances
    //                     and your life.
    //                   </p>
    //                   <p>
    //                     With our support, you can develop a plan to pay off your
    //                     debts gradually while still maintaining your basic
    //                     needs. Settleloans will also work with your creditors to
    //                     negotiate lower interest rates and more favorable
    //                     repayment terms, ensuring that you can manage your debts
    //                     without incurring additional financial burden.
    //                   </p>
    //                   <p>
    //                     At the same time, our team will handle all
    //                     communications with your creditors, ensuring that you no
    //                     longer have to endure constant calls and visits from
    //                     debt collectors. This can provide you with a sense of
    //                     peace and security, allowing you to focus on rebuilding
    //                     your life without the added stress of dealing with
    //                     creditors.
    //                   </p>
    //                   <p>
    //                     So, if you're struggling with debt, don't suffer in
    //                     silence. Contact Settleloans today to learn more about
    //                     how we can help you regain control of your finances and
    //                     your life.
    //                   </p>
    //                 </div>
    //                 <div
    //                   className="about-5__content-list wow tpfadeUp w-full"
    //                   data-wow-duration=".9s"
    //                   data-wow-delay=".9s"
    //                 >
    //                   <ul className="w-full">
    //                     <li className="w-full">
    //                       <i className="fal fa-check-circle" />
    //                       <span className="w-full">
    //                         We are trusted by more than 5000 clients
    //                       </span>
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div
    //                   className="about-5__button wow tpfadeUp"
    //                   data-wow-duration=".9s"
    //                   data-wow-delay="1.1s"
    //                 >
    //                   <Link
    //                     className="main-btn tp-btn-hover alt-color"
    //                     to="/contact"
    //                   >
    //                     <span>Connect with Us</span>
    //                     <b />
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=919821219819&text&type=phone_number&app_absent=0"
        class="float"
        target="_blank"
      >
        <i class="fab fa-whatsapp xl"></i>
      </a>
      <section className="Head1">
        <SocialHeader />
        <Header />
      </section>
      <section className="ip_banner">
        <div className="about_us about-5__area about-5__plr row1 align-items-center justify-content-center">
          <div className="col-lg-6 no-padd">
            <div className="ip_banner_img">
              <div className="video-container">
                <video
                  ref={videoRef}
                  muted
                  autoplay
                  playsInline
                  onEnded={handleVideoEnd}
                >
                  <source src="./assets/settleloans.mp4" type="video/mp4" />
                  <source src="./assets/settleloans.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ip_banner_content">
              <div className="line1"></div>
              <h2>Settleloans - Settle Life.</h2>
              <div className="line1"></div>
              <h4 className="white1">
                Quick Action Within 24 Hours to Stop Loan Recovery Harassment
                and Relieve Your Stress
              </h4>
              <p> With us you are in Safe Hands. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftc-no-pb">
        <div className="container1">
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div
                    className="vc_empty_space  height_tiny"
                    style={{ height: 32 }}
                  >
                    <span className="vc_empty_space_inner"></span>
                  </div>
                  <div
                    id="sc_title_1975462749"
                    className="sc_title color_style_default sc_title_default"
                  >
                    <h2
                      className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default"
                      style={{ marginTop: -1 }}
                    >
                      <center>Who we are and what we do?</center>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      Dealing with <b>debt</b> can seriously affect your{" "}
                      <b>mental and emotional well-being</b>, leading to{" "}
                      <b>anxiety</b>, <b>depression</b>, and difficulty
                      concentrating on <b>work</b> or <b>relationships</b>. The
                      constant pressure of <b>debt</b> can also strain{" "}
                      <b>personal connections</b>, increasing <b>stress</b> and{" "}
                      <b>isolation</b>. However, <b>Settleloans</b> can offer
                      much-needed relief. We understand the challenges of{" "}
                      <b>debt</b> and its impact on your life. Our team provides{" "}
                      <b>comprehensive debt management solutions</b>, tailored
                      to your needs, so you can regain <b>control</b> of your{" "}
                      <b>finances</b> and life. With our support, you can create
                      a manageable plan to <b>pay off debts gradually</b> while
                      maintaining <b>basic needs</b>. <b>Settleloans</b> will
                      negotiate <b>lower interest rates</b> and{" "}
                      <b>better repayment terms</b> with creditors, helping you
                      manage your debts without additional financial strain. We
                      will also handle all communications with <b>creditors</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row2">
            <div
              className="col-md-6"
              style={{ float: "left", marginTop: "30px" }}
            >
              <img
                style={{ width: "100%" }}
                src="./assets/1.png"
                alt="What Sets Us Apart"
              />
            </div>
            <div className="col-md-6" style={{ float: "left" }}>
              <div className="practice" align="left">
                {/* Image placeholder if needed */}
                {/* <a href="#" className="img" style={{ backgroundImage: "url(images/criminal.png)", maxWidth: "90%" }}></a> */}
                <div className="info">
                  <h2>Why Choose Us?</h2>
                  <p style={{ textAlign: "justify" }}>
                    Backed by years of experience, we specialize in resolving
                    loan issues and securing <b>favorable settlements</b> you
                    can trust. Our expertise ensures you are protected from{" "}
                    <b>creditor harassment</b>, giving you peace of mind
                    throughout the process. Thousands of clients have
                    successfully reduced their debt burden with our{" "}
                    <b>proven solutions</b>, showcasing our commitment to
                    delivering effective results.{" "}
                    <b>Transparency and affordability</b> are at the core of our
                    services, as we provide clear and cost-effective solutions
                    tailored to your unique financial needs. With a{" "}
                    <b>nationwide presence</b>, including offices in{" "}
                    <b>Gurugram, Mumbai, and Bangalore</b>, we are here to help,
                    no matter where you are. Our dedication to excellence and
                    personalized support empowers you to regain{" "}
                    <b>financial freedom</b> and confidently navigate your debt
                    challenges. Let us guide you towards a brighter, stress-free
                    future with our trusted expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row2">
            {/* Left Column */}
            <div className="col-md-6" style={{ float: "left" }}>
              <div className="practice" align="left">
                {/* Optional Placeholder for Background Image */}
                {/* <a href="#" className="img" style={{ backgroundImage: "url(images/criminal.png)", maxWidth: "90%" }}></a> */}
                <div className="info">
                  <h2>Our Process</h2>
                  <p style={{ textAlign: "justify" }}>
                    <b>Enrollment:</b> Collect essential documents such as CIBIL
                    report, Aadhaar card, PAN card, and case details.<br></br>
                    <b>Client Discussion:</b> Explore options to achieve a
                    debt-free status quickly, based on income. Develop a savings
                    plan to accumulate funds for debt settlement.<br></br>
                    <b>Fee Discussion:</b> Define the fee structure, including
                    duration and amount, through a detailed discussion.<br></br>
                    <b>Post Enrollment:</b> After fee payment, a WhatsApp group
                    is formed with financial and legal experts to address
                    complications such as:<br></br> (a) Managing recovery agent
                    harassment <br></br>(b) Responding to legal notices.
                    <br></br> (c) Handling legal complications. <br></br>(d)
                    Negotiating with creditors on the client’s behalf.<br></br>
                    <b>Settlement Authorization:</b> After negotiation, validate
                    the bank's settlement letter. The client makes the
                    settlement payment to the bank and releases the success fee
                    to AMA Legal Solutions as agreed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="col-md-6"
              style={{ float: "left", marginTop: "30px" }}
            >
              <img
                style={{ width: "100%" }}
                src="./assets/2.png"
                alt="Why Choose Us"
                className="choose-desktop"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
