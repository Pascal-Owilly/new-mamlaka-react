import styles, { layout } from "../style";

const ReturnAndRefundPolicy = () => (
  <section className={`container ${layout.section}`}>
    <div className={`row ${layout.sectionInfo}`}>
      <div className="col">
        <h2 className={styles.heading2}>
          Return and Refund Policy
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Effective Date: 01.01.2024
        </p>
        <p className={`${styles.paragraph}`}>
          At Mamlaka Hub and Spoke Limited (MHS), we strive to provide seamless and secure payment services to our customers in Kenya. We understand that situations may arise where you need to request a return for a payment made through our platform. This Return and Refund Policy outlines the terms and conditions governing returns and refunds for our digital payment services. Please review this policy carefully before utilizing our services.
        </p>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">1</span>
            Return Policy Overview
          </h3>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">2</span>
            Eligibility Criteria for Returns
          </h3>
          <ul>
            <li>Returns are only applicable to payments made through our platform for eligible products and services.</li>
            <li>To be eligible for a return, the payment must have been made within the last 90 days, starting from the transaction processing date.</li>
            <li>To process a return and refund request, you must initiate the request within 15 days from the transaction date.</li>
            <li>The payment should not have been successfully processed by the recipient.</li>
            <li>The transaction must adhere to our Terms of Service and all applicable laws and regulations.</li>
            <li>Any applicable fees or charges associated with the payment will be deducted from the refund amount.</li>
          </ul>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">3</span>
            Return Process
          </h3>
          <p>
            Upon receipt of your return and refund request, our team will carefully review the provided information to assess the eligibility of the transaction for a refund. Additional documentation or clarification may be requested to facilitate an efficient process.
          </p>
          <p>
            If the return is approved, we will process the refund within 3-10 business days. Refunds will be processed using the same payment method used for the original transaction. Please note the following:
          </p>
          <ul>
            <li>The duration for processing refunds may vary based on the payment method and financial institutions involved.</li>
            <li>Any fees or charges imposed by third parties during the refund process (such as banks or payment gateways) will be subtracted from the refund amount.</li>
            <li>Refunds will be processed in the transaction currency and will be contingent upon the prevailing exchange rates during processing.</li>
          </ul>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">4</span>
            Exclusions
          </h3>
          <p>
            Returns are not applicable to payments that have already been successfully processed by the recipient. In such cases, customers are advised to directly contact the recipient to resolve any disputes.
          </p>
          <p>
            Certain transactions may be considered non-refundable. It's essential to review the terms and conditions of each transaction before proceeding to ensure a clear understanding of the refund policy for that specific transaction.
          </p>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">5</span>
            Modifications to the Return Policy
          </h3>
          <p>
            Mamlaka Hub & Spoke reserves the right to modify, amend, or update this Return and Refund Policy at its discretion without prior notification. The revised policy will be accessible on our website, along with the date of the latest revision. By using our payment services, you agree to abide by the terms and conditions outlined in this policy.
          </p>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">6</span>
            Contact Us
          </h3>
          <p>
            If you have any questions or concerns about our return and refund policy, please feel free to reach out to our customer support team at <a href="mailto:hello@mam-laka.com">hello@mam-laka.com</a> or Tel: <a href="tel:+254739567904">+254739567904</a>.
          </p>
        </div>
      </div>

      <div className={`col ${layout.sectionImg}`}>
        {/* You can add any related image or leave it blank */}
      </div>
    </div>
  </section>
);

export default ReturnAndRefundPolicy;
