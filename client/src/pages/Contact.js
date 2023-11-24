import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus" style={{ backgroundColor: "#f7f7f7", padding: "30px", borderRadius: "10px" }}>
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="col-md-6">
          <h1 style={{ marginBottom: "20px", color: "#333", fontWeight: "bold", textAlign: "center" }}>CONTACT US</h1>
          <p className="text-justify mt-2" style={{ lineHeight: "1.6" }}>
            We're here to assist you! For any questions or support, reach out to our customer support team at{" "}
            <strong>support@sportifypro.com</strong> or call <strong>1-800-SPORTIFY</strong> during business hours.
          </p>
          <p className="text-justify mt-2" style={{ lineHeight: "1.6" }}>
            We value your feedback and suggestions at <strong>feedback@sportifypro.com</strong>. Connect with us on social media
            <strong> @SportifyPro</strong> for updates and promotions.
          </p>
          <p className="text-justify mt-2" style={{ lineHeight: "1.6" }}>
            For partnerships, media inquiries, or privacy concerns, contact us at{" "}
            <strong>partnerships@sportifypro.com</strong>, <strong>media@sportifypro.com</strong>, or respectively.
          </p>
          <p className="text-justify mt-2" style={{ lineHeight: "1.6" }}>
            Your satisfaction is our priority!
          </p>
          <div className="mt-4">
            <p>
              <BiMailSend /> : <strong>support@sportifypro.com</strong>
            </p>
            <p>
              <BiPhoneCall /> : <strong>1-800-SPORTIFY</strong>
            </p>
            <p>
              <BiSupport /> : <strong>1800-0000-0000 (toll free)</strong>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
