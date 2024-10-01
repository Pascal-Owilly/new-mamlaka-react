import React from 'react';
import { FaMoneyBillWave, FaCreditCard, FaPlug, FaExchangeAlt } from 'react-icons/fa'; // Import icons

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section
        className="hero-section flex items-center justify-center text-center p-16"
        style={{ backgroundColor: "#402a6f", minHeight: "40vh" }}
      >
        <h1 className="text-5xl font-bold text-white">Solutions</h1>
      </section>

      {/* Solutions Content */}
      <div className="p-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Payment Processing Card */}
          <div className="solution-card bg-white p-6 rounded shadow-lg">
            <FaMoneyBillWave className="text-4xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold">Payment Processing</h2>
            <p>
              Streamline your financial transactions with our efficient and reliable payment processing solutions. Provide your customers with multiple payment options including cards, mobile, USSD, and transfers. Enhance their convenience and expand your business.
            </p>
          </div>

          {/* Merchant Services Card */}
          <div className="solution-card bg-white p-6 rounded shadow-lg">
            <FaCreditCard className="text-4xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold">Merchant Services</h2>
            <p>
              Experience a versatile and secure multi-channel gateway tailored to meet the specific needs of your needs. Our merchant services offer a range of solutions designed to support your financial transactions efficiently.
            </p>
          </div>

          {/* Money Transfers Card */}
          <div className="solution-card bg-white p-6 rounded shadow-lg">
            <FaExchangeAlt className="text-4xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold">Money Transfers</h2>
            <p>
              Enjoy options for instant transfers and real-time processing, providing users with immediate access to funds including:
              <ul className="list-disc ml-5">
                <li>International Remittances</li>
                <li>Cross-border payments</li>
              </ul>
            </p>
          </div>

          {/* Plug and Play Card */}
          <div className="solution-card bg-white p-6 rounded shadow-lg">
            <FaPlug className="text-4xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold">Plug and Play</h2>
            <p>
              Exploit our seamless 'plug-in' technology that allows merchants to accept and manage both credit card and mobile money payments in a secure environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
