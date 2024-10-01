import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../style";
import { FaCreditCard } from 'react-icons/fa'; // Correct import statement
import { FaApple, FaGooglePlay } from 'react-icons/fa'; // Import App Store Icons

const CardDeal = () => (
  <div>
    {/* Main Content Section */}
    <div className="jumbotron my-5" style={{ background: '#fff', color: 'black', padding: '10px', borderRadius: '10px', margin: '20px' }}>
      <div className="row">
        {/* Compass Image Section */}
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
          <div className="p-4">
            <div className="card-body text-center">
            <h1 className="flex-1 font-bitter font-semibold ss:text-[48px] text-[30px] ss:leading-[100.8px] leading-[48px]">
            Multiple Payment Options</h1>
              <p className="mt-3 font-bitter">
                We integrate with leading money transfer services across Africa, enabling your customers to pay via credit and debit cards, mobile money, and other transfer methods.
              </p>
            </div>
          </div>
        </div>

        {/* Description Section Inside a Card with Placeholder Icon */}
        <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <FaCreditCard size={250} color="#852890" style={{ transform: 'rotate(35deg)' }} /> {/* Updated Icon Size and Color */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardDeal;
