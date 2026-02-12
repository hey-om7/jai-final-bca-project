import "./aboutus.css";

export function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-hero">
          <h1 className="about-title">Ambarkar Industries</h1>
          <p className="about-subtitle">
            Crafting Excellence in Cotton for Over 25 Years
          </p>
        </div>

        <div className="about-story">
          <p>
            At <span className="highlight">Ambarkar Industries</span>, quality is not just a promise —
            it is a tradition refined over decades. With more than{" "}
            <strong>25 years of experience</strong> in the textile industry, we
            stand as a trusted name known for precision, reliability, and
            uncompromising standards.
          </p>
          <p>
            Our journey began with a simple vision: to produce the finest cotton products
            that combine luxury with durability. Today, we are proud to be a leading
            manufacturer, setting benchmarks in the industry through innovation and
            sustainable practices.
          </p>
        </div>

        <div className="values-section">
          <h2 className="section-title">Our Core Values</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>Premium Sourcing</h3>
              <p>
                We source only the finest-grade cotton from the best
                cotton-growing regions, ensuring superior softness, strength,
                and durability in every product.
              </p>
            </div>

            <div className="about-card">
              <h3>Advanced Technology</h3>
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
              <h3>Trusted Expertise</h3>
              <p>
                Backed by decades of expertise, we understand the evolving
                demands of the textile market and deliver products built to
                last.
              </p>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <p>
            At <span>Ambarkar Industries</span>, we don’t just manufacture
            textiles — we build long-term trust through excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
