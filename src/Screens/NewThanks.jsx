import React from "react";
import paynow from '../assets/img/paynow.png'
import paylater from '../assets/img/paylater.png'
const NewThanks = () => {
    return (
        <div>
            {/* Main Content */}
            <div className="container mt-5 pt-5">
                <div className="text-center my-5">
                    <h1>Thank You for Submitting the form</h1>
                    <p className="mt-3">
                    We have received your form, and our team is currently reviewing the information provided. To move forward and arrange a consultation call, kindly make a payment of ₹21.00.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-around items-center gap-4">
  <img className="w-96" src={paynow} alt="Pay Now" />
  <img className="w-96" src={paylater} alt="Pay Later" />
</div>

                <div className="my-5 text-center">
                        <h4>Pay via PayU</h4>
                        {/* <img src={qrCode} alt="UPI QR Code" className="img-fluid mt-3" style={{ maxWidth: "200px" }} /> */}
                        {/* <p className="mt-2">Scan this QR code to make your payment.</p> */}
                        {/* <strong >OR</strong> */}
                        {/* <br /> */}
                        {/* <br /> */}
                        <button className="main-btn"
                            onClick={() => {
                                window.location.href = 'https://pmny.in/vrb1u30nOeZB'
                            }}
                        >Click Here To Pay </button>
                    </div>

                <div className="my-5">
                    <h4>Understanding the Loan Settlement Process</h4>
                    <p>
                    Loan settlement is a financial service that can help reduce your outstanding debt by negotiating with the lender.
                    For example, if you owe ₹10 lakhs and settle for ₹6 lakhs, you save ₹4 lakhs.
                    Our team assists in managing these negotiations and resolving harassment from lenders.
                    </p>
                </div>

                <div className=" my-5">
                    <h4>We will help you in settlement of your loans:</h4>
                    <p>1. Your total credit card and personal loan amount can be reduced to around 50% or less over a few months.</p>
                    <p>2. For example, if your loan is Rs. 100,000, we can help negotiate with the bank to settle it for about Rs. 50,000 or less, payable in installments.</p>
                    <p>3. The negotiation process with the bank typically takes 3-6 months, giving you time to arrange the necessary funds.</p>
                    <p>4. Our team can assist you if you are facing any harassment from the bank or lender.</p>
                    <p>5. Our fee is included in the 50% settlement amount, and it will also be payable in monthly installments.</p>
                    <p>6. An initial payment of Rs. 3,000 is required to start the process.</p>
                    <h4 className="text-center my-5">Have Questions?</h4>
                    <p className="text-center">
                        Contact us before making a payment. Email: <a href="mailto:info@settleloans.in">info@settleloans.in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewThanks;
