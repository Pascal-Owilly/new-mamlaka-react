import React from 'react';

const FAQsPage = () => {
  const faqs = [
    {
      question: '1. What is the process for onboarding as a PSP client with Mamlaka?',
      answer: 'The onboarding process involves submitting your business details and documents for verification. You will also need to sign the necessary contracts, provide Know Your Customer (KYC) information, and comply with all regulatory requirements. Once verified, you\'ll be given access to our payment systems and platforms.',
    },
    {
      question: '2. What documents are required for onboarding?',
      answer: (
        <>
          To onboard as a PSP client, you will need the following documents:
          <ul className="list-disc ml-5">
            <li>Business Registration Certificate or Incorporation Certificate.</li>
            <li>KRA PIN Certificate.</li>
            <li>Director’s IDs/Passports.</li>
            <li>Bank details for settlements.</li>
            <li>Tax Compliance Certificate.</li>
            <li>Proof of business operation (such as invoices or contracts).</li>
            <li>Any other regulatory requirements as specified.</li>
          </ul>
        </>
      ),
    },
    {
      question: '3. How long does the onboarding process take?',
      answer: 'The onboarding process typically takes between 5-10 business days, depending on the prompt submission of documents and the complexity of your business. We aim to process all applications as efficiently as possible.',
    },
    {
      question: '4. What services are available to PSP clients?',
      answer: (
        <>
          As a PSP client, Mamlaka offers the following services:
          <ul className="list-disc ml-5">
            <li>Mobile money payments.</li>
            <li>Card payment gateway services.</li>
            <li>Bulk payment processing.</li>
            <li>Airtime services.</li>
            <li>IVR and SMS services for transaction confirmations.</li>
          </ul>
        </>
      ),
    },
    {
      question: '5. How do you handle KYC (Know Your Customer) compliance?',
      answer: 'KYC compliance is a key requirement. We verify all submitted documents and conduct due diligence to ensure that your business complies with the regulatory standards in Kenya. This includes verifying your business registration details, directors, and tax status.',
    },
    {
      question: '6. Are there any setup fees for onboarding as a PSP client?',
      answer: 'The setup fees will depend on the services selected. You will be provided with a comprehensive fee structure during the onboarding process, detailing the cost of integration and service usage.',
    },
    {
      question: '7. What are the settlement timelines for transactions?',
      answer: (
        <>
          Our settlement timelines vary depending on the payment method used:
          <ul className="list-disc ml-5">
            <li><b>Mobile Money:</b> T+1 (Next Business Day).</li>
            <li><b>Card Payments:</b> T+2 (Two Business Days).</li>
            <li><b>Bank Transfers:</b> T+3 (Three Business Days).</li>
          </ul>
          We ensure timely settlements directly into your designated merchant account.
        </>
      ),
    },
    {
      question: '8. How is customer support handled?',
      answer: 'Mamlaka offers 24/7 customer support to all PSP clients. Our dedicated team is always available to address any issues, provide technical support, and ensure smooth payment operations. You can reach us via email, phone, or our online support portal.',
    },
    {
      question: '9. What security measures are in place for PSP transactions?',
      answer: 'We prioritize the security of transactions through encryption of all payment data, strong authentication measures, adherence to PCI-DSS compliance for card payments, and regular audits and monitoring to prevent fraud.',
    },
    {
      question: '10. How do I monitor my transactions?',
      answer: 'You will be provided with access to an online dashboard where you can track all your transactions in real-time. The dashboard provides detailed reports on payments, settlements, and transaction history, ensuring full transparency in your operations.',
    },
    {
      question: '11. Can I integrate my existing system with Mamlaka’s PSP platform?',
      answer: 'Yes, our system supports easy integration through APIs. Our technical team will provide you with the necessary documentation and assistance to integrate your existing system with our payment gateway.',
    },
    {
      question: '12. What are the payment processing fees?',
      answer: 'Payment processing fees vary depending on industry, transaction volumes, and transaction value.',
    },
    {
      question: '13. What happens if there is a chargeback?',
      answer: 'In the event of a chargeback, we will notify you immediately and work with you to resolve the issue. Our team will assist in the representation process to challenge any fraudulent or erroneous chargeback claims.',
    },
    {
      question: '14. Is training provided during onboarding?',
      answer: 'Yes, we provide comprehensive training to ensure you and your team are well-versed in using our platform. This includes how to navigate the dashboard, manage transactions, and generate reports.',
    },
    {
      question: '15. Can Mamlaka assist in integrating mobile wallets and other payment methods?',
      answer: 'Absolutely. We support integration with mobile wallets (e.g., M-Pesa, Airtel Money) and various other payment methods to ensure a seamless payment experience for your customers.',
    },
    {
      question: '16. How do I apply to become a PSP client?',
      answer: 'To apply, simply visit our website or contact us via email. Our sales team will guide you through the initial application process and provide all necessary information for onboarding.',
    },
  ];

  return (
    <div className="faqs-page">
      {/* Hero Section */}
      <section
        className="hero-section flex items-center justify-center text-center p-16"
        style={{ backgroundColor: "#402a6f", minHeight: "30vh" }}
      >
        <h1 className="text-5xl font-bold text-white">Frequently Asked Questions</h1>
      </section>

      {/* FAQs List */}
      <div className="faq-list p-8 bg-gray-100">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item mb-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
