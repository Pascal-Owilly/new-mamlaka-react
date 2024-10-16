import React from "react";
import styles from "../style"; // Import shared styles

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section
        className="hero-section flex items-center justify-center p-10"
        style={{ backgroundColor: "#402a6f", minHeight: "50vh" }}
      >
        <div>
          <h1 className="text-5xl font-bold text-white text-center tracking-wide">ABOUT US</h1>
          <p className="mt-4 text-white text-sm max-w-3xl mx-auto leading-relaxed">
            MHS is building a comprehensive global payment network designed to enhance payment experiences. By integrating seamlessly with MHS' APIs, businesses and customers can enjoy instant, cross-border transactions. MHS has crafted a compelling value proposition that combines commercial viability with significant impact, setting it apart in the industry.
          </p>
          <p className="mt-4 text-white text-sm max-w-3xl mx-auto leading-relaxed">
            The platform is poised for growth, leveraging affordable capital to deliver cutting-edge supply chain finance solutions. MHS is uniquely positioned to empower small-scale agricultural players by addressing the challenges of securing structured investment capital. Our innovative approach focuses on delivering tailored financial solutions that drive growth and sustainability within the supply chain.
          </p>
        </div>
      </section>

      {/* Corporate Culture Section */}
      <section className="corporate-culture p-10 bg-gray-100 text-center">
        <h2 className={`${styles.heading2} font-bold text-gray-800 text-3xl`}>CORPORATE CULTURE</h2>
        <div className="mt-4">
          <h3 className="font-semibold text-xl">OUR MISSION</h3>
          <p className="mt-2l mx-auto">
            To Build Africa's largest Trans-Africa Trade and Financial Network.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-">OUR VISION</h3>
          <p className="mt-2  mx-auto">
            To build a connected financial ecosystem that empowers African businesses and drives sustainable growth.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values p-10 text-center bg-white">
        <h2 className={`${styles.heading2} text-gray-800 text-3xl`}>CORE VALUES</h2>
        <ul className="mt-6 list-disc list-inside max-w-3xl mx-auto text-left">
          <li className="mb-4 text-sm">
            Building a digital financial ecosystem for informal cross-border traders.
          </li>
          <li className="mb-4 text-sm">
            Enabling real-time settlements and seamless correspondence services.
          </li>
          <li className="mb-4 text-sm">
            Developing a value proposition with commercial and impactful returns.
          </li>
          <li className="mb-4 text-sm">
            Scaling through access to affordable capital and innovative finance solutions.
          </li>
          <li className="mb-4 text-sm">
            Supporting sustainable growth for small actors in the agricultural supply chain.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
