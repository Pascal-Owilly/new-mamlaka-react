import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../style";

const CardDeal = () => (
  <div className="jumbotron my-5" style={{ background: '#6a2b89', color: 'white', padding: '10px', borderRadius: '10px', margin: '20px' }}>
    <div className="row">
      {/* Compass Image Section */}
      <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
        <div className="position-relative" style={{ width: "450px", height: "450px" }}>
          {/* Symmetrical Dotted Circular Path SVG */}
          <div className="position-absolute w-100 h-100">
            <svg viewBox="0 0 100 100" className="w-100 h-100">
              {/* Dotted Circle Path */}
              <defs>
                <marker
                  id="arrow"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="2"
                  orient="auto"
                >
                  <path d="M0,0 L0,4 L6,2 Z" fill="#222b5b" />
                </marker>
              </defs>
              <path
                d="M 50, 10 
                   a 40,40 0 1,1 0,80
                   a 40,40 0 1,1 0,-80"
                fill="transparent"
                stroke="#fff"
                strokeDasharray="2,2"
                strokeWidth="0.5"
                markerEnd="url(#arrow)"
              />
            </svg>
          </div>

          {/* Top Image Placeholder */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              top: "10%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src='https://via.placeholder.com/90' alt="Top Image" className="w-100 h-100 rounded-circle" />
          </div>

          {/* Center Text */}
          {/* <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "120px",
              height: "120px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
          </div> */}

          {/* Bottom-Right Image */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              bottom: "30%",
              right: "15%",
              transform: "translate(50%, 50%)",
            }}
          >
            <img src='https://via.placeholder.com/90' alt="Bottom Right Image" className="w-100 h-100 rounded-circle" />
          </div>

          {/* Bottom-Left Image */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              bottom: "20%",
              left: "25%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <img src='https://via.placeholder.com/90' alt="Bottom Left Image" className="w-100 h-100 rounded-circle" />
          </div>

          {/* Top-Left Image */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              top: "40%",
              left: "15%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src='https://via.placeholder.com/90' alt="Top Left Image" className="w-100 h-100 rounded-circle" />
          </div>
        </div>
      </div>

      {/* Description Section Inside a Card */}
      <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
        <div className="card p-4" style={{ backgroundColor: '#ccc', borderRadius: '10px' }}>
          <div className="card-body text-center">
          <h1 className="flex-1 font-bitter font-semibold ss:text-[48px] text-[30px] ss:leading-[100.8px] leading-[48px]">
          Payment Processing</h1>
            <p className="mt-3 font-bitter">
              MHS offers secure payment processing with credit cards, mobile money, and bank transfers, <br />
              ensuring smooth PCI DSS/GDPR compliant transactions with real-time tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardDeal;
