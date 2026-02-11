import "./aboutus.css";

export function AboutUs() {
    return (
        <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">Ambarkar Industries</h1>
        <p className="about-subtitle">
          Crafting Excellence in Cotton for Over 25 Years
        </p>

        <div className="about-content">
          <p>
            At <span>Ambarkar Industries</span>, quality is not just a promise —
            it is a tradition refined over decades. With more than{" "}
            <strong>25 years of experience</strong> in the textile industry, we
            stand as a trusted name known for precision, reliability, and
            uncompromising standards.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Premium Cotton Sourcing</h3>
              <p>
                We source only the finest-grade cotton from the best
                cotton-growing regions, ensuring superior softness, strength,
                and durability in every product.
              </p>
            </div>

            <div className="about-card">
              <h3>Advanced Machinery</h3>
              <p>
                Our facility is powered by state-of-the-art machines and modern
                processing technology, delivering consistency, efficiency, and
                precision at scale.
              </p>
            </div>

            <div className="about-card">
              <h3>Unmatched Quality</h3>
              <p>
                Every stage of production undergoes strict quality checks to
                ensure our products meet international standards and exceed
                expectations.
              </p>
            </div>

            <div className="about-card">
              <h3>Experience & Trust</h3>
              <p>
                Backed by decades of expertise, we understand the evolving
                demands of the textile market and deliver products built to
                last.
              </p>
            </div>
          </div>

          <p className="about-footer">
            At <span>Ambarkar Industries</span>, we don’t just manufacture
            textiles — we build long-term trust through excellence.
          </p>
        </div>
      </div>
    </section>
    )
}
