import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus" style={{ backgroundColor: "#f7f7f7", padding: "30px", borderRadius: "10px" }}>
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="col-md-6">
          <h1 style={{ marginBottom: "20px", color: "#333", fontWeight: "bold" }}>Welcome to Sportify Pro</h1>
          <p className="text-justify mt-2" style={{ lineHeight: "1.6" }}>
            Your ultimate destination for all things sports-related! Founded by Kishan Soni, Soham Thaker, Meet Soni, and Aman Mullick, our passion for sports and technology has driven us to create a seamless online shopping experience tailored exclusively for sports enthusiasts.
          </p>
          <p className="text-justify mt-2" style={{ lineHeight: "1.6" }}>
            At Sportify Pro, we understand the thrill of the game and the importance of having top-notch sports gear and equipment. That's why we curate an extensive collection of high-quality products from leading brands, covering a wide range of sports disciplines. Whether you're a seasoned athlete or just getting started, we've got everything you need to elevate your game to the next level.
          </p>
          <p style={{ lineHeight: "1.6" }}>
            Join us at Sportify Pro, and let's embark on an exhilarating journey together, where your love for sports meets unmatched convenience and reliability. Get ready to gear up, perform at your best, and make every sports moment count!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
