import React from "react";
import './PartnersPage.css'; // Import your CSS file for styling

const partnersData = [
  {
    title: "MHS Insurance",
    description: "MHS Insurance safeguards businesses and individuals by mitigating risks and ensuring financial security, enabling stability and resilience in unpredictable circumstances.",
  },
  {
    title: "Large Scale Farms",
    description: "Large-scale farms boost food production through advanced agricultural practices, supporting food security, and sustainable growth by leveraging economies of scale.",
  },
  {
    title: "Freight",
    description: "Our freight services provide robust solutions for transporting goods across various distances and regions. We offer customized shipping options to meet the unique demands of businesses, ensuring timely and cost-effective delivery for every shipment.",
  },
  {
    title: "Logistics",
    description: "Our logistics services ensure seamless transportation and timely delivery of goods, optimizing supply chain efficiency. By leveraging advanced tracking and management systems, we help businesses meet their distribution goals with precision and reliability.",
  },
  {
    title: "Warehousing",
    description: "Our warehousing solutions provide secure and efficient storage options, ensuring the preservation and management of goods. We focus on optimizing space, reducing costs, and delivering a seamless inventory experience to support your business needs.",
  },
  {
    title: "Banks",
    description: "We partner with banks to offer reliable financial solutions that facilitate smooth transactions and secure investments. Our collaboration ensures that banking services are aligned with industry needs, enhancing financial growth and stability.",
  },
];

const PartnersPage = () => {
  return (
    <div className="partners-container">
      <h1 className="partners-title">Our Partners</h1>
      <div className="partners-grid">
        {partnersData.map((partner, index) => (
          <div key={index} className="partner-card">
            <h2 className="partner-title">{partner.title}</h2>
            <p className="partner-description">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
