import "./reporterror.css";

function ReportError() {
  return (
    <section className="report-section">
      <div className="report-container">
        <h1 className="report-title">Report an Issue</h1>
        <p className="report-subtitle">
          We’re here to help. Please email us at the appropriate address below.
        </p>

        <div className="report-grid">
          {/* Technical Error */}
          <div className="report-card">
            <h3>Technical Error</h3>
            <p>
              Facing issues with the website, payments, login, or unexpected
              errors?
            </p>
            <p className="email-text">
              Please email us at{" "}
              <a href="mailto:tech@ambarkarindustries.com">
                tech@ambarkarindustries.com
              </a>
            </p>
          </div>

          {/* Order Problem */}
          <div className="report-card">
            <h3>Order Problem</h3>
            <p>
              Issues related to orders, delivery, billing, or product concerns?
            </p>
            <p className="email-text">
              Please email us at{" "}
              <a href="mailto:orders@ambarkarindustries.com">
                orders@ambarkarindustries.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Admin */}
        <div className="admin-contact">
          <h3>Contact Admin</h3>
          <p>
            For urgent matters or unresolved issues, please email us at
          </p>
          <p className="email-text admin-email">
            <a href="mailto:admin@ambarkarindustries.com">
              admin@ambarkarindustries.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
export default ReportError;