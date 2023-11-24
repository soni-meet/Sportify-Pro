import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div
        className="row contactus"
        style={{
          backgroundColor: "#f7f7f7",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="col-md-6">
          <h1 style={{ marginBottom: "20px" }}>Privacy Policy</h1>
          <p>
            <strong>Data Collection:</strong> Personal (name, email, address,
            payment) and non-personal (IP, browser) info is collected for
            orders and website analytics.
          </p>

          <p>
            <strong>Data Usage:</strong> Personal info is used for orders,
            support, and updates. Non-personal info improves website
            performance.
          </p>

          <p>
            <strong>Data Protection:</strong> We use standard security measures,
            but no online storage is 100% secure.
          </p>

          <p>
            <strong>Third-Party Sharing:</strong> Info may be shared with
            trusted partners for order fulfillment.
          </p>

          <p>
            <strong>Cookies:</strong> We use cookies for better browsing.
            Adjust browser settings to manage cookies.
          </p>

          <p>
            <strong>Legal Requirements:</strong> Info may be disclosed as
            required by law or to protect rights/safety.
          </p>

          <p>
            <strong>Children's Privacy:</strong> Our website is not for
            children under 13; we don't knowingly collect their data.
          </p>

          <p>
            <strong>Consent:</strong> By using Sportify Pro, you agree to this
            Privacy Policy.
          </p>

          <p>
            <strong>Policy Changes:</strong> We may update this policy
            occasionally; revisions will be posted here.
          </p>

          <p>
            <strong>Contact:</strong> For privacy inquiries, email{" "}
            <a href="mailto:privacy@sportifypro.com">privacy@sportifypro.com</a>
            .
          </p>

          <p>
            Your trust is valued, and we safeguard your data for a secure
            experience on our platform.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
