import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className="container">

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Terms of Service <br className="sm:block hidden" /> 
        Mamlaka Hub & Spoke Ltd.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        These terms and conditions constitute a legally binding agreement between you, 
        whether personally or on behalf of an entity (“you” and “User”) and Mamlaka Hub & Spoke Ltd. 
        (“MHS”, “we”, “us”, or “our”) and govern your use of the https://mam-laka.com website 
        (the “Site”) and services provided.
      </p>

      <TermsSection title="1. Scope of Agreement">
        <p>
          1.1 These terms and conditions constitute a legally binding agreement (the “Agreement”) made between you, 
          personally or on behalf of an entity, and MHS, and govern your use of the Site and services.
        </p>
        <p>
          1.2 YOU AGREE THAT BY ACCESSING THE SITE, YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY ALL OF THESE TERMS AND CONDITIONS OF THE AGREEMENT. 
          IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE, 
          AND YOU MUST DISCONTINUE USE IMMEDIATELY. IF YOU ARE UNDER EIGHTEEN (18) YEARS OF AGE, YOU MAY NOT USE THE SERVICE.
        </p>
        <p>
          1.3 Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. 
          MHS reserves the right to modify any terms at its discretion. The User’s continued use of the Service following the posting of any changes constitutes acceptance.
        </p>
        <p>
          1.4 The information provided on the Site is not intended for distribution in jurisdictions where such use would be contrary to law. 
          Users are responsible for compliance with local laws if applicable.
        </p>
      </TermsSection>

      <TermsSection title="2. MHS">
        <p>
          2.1 Mamlaka Hub & Spoke Ltd. is a private company incorporated in Kenya and regulated by the Central Bank of Kenya in accordance with authorization certificate no. NPS/29/31/2023.
        </p>
        <p>
          2.2 MHS processes Payment Transactions on behalf of Sellers. MHS is not a bank or other chartered depository institution.
        </p>
      </TermsSection>

      <TermsSection title="3. Using the Service">
        <p>
          3.1 The User does not need to register for an MHS account to use the Service and visit most areas of the Site. 
          However, to access restricted areas of the Site, the User will need to register and set up an account with MHS (the “Account”).
        </p>
        <p>
          3.2 The User is solely responsible for the Account, the maintenance, confidentiality, and security of the Account, 
          and all passwords related to your Account, including all activities of any persons who gain access to the Account 
          with or without the User’s permission.
        </p>
        <p>
          3.3 The User agrees to immediately notify MHS if they become aware of any unauthorized use of the Account, any 
          Service provided through the Account, any password related to the Account, or any other breach of security with respect to the Account. 
          The User agrees to provide assistance to MHS, as requested, to stop or remedy any breach of security related to the Account.
        </p>
        <p>
          3.4 The verification documents provided to MHS must be uploaded by the User into the MHS system using the relevant function of the Site. 
          If scanned copies of the documents do not pass the technical screening, the transaction will be refused, and the User will be denied use of the Service.
        </p>
        <p>
          3.5 MHS retains the right to request additional documents and/or information regarding the User or transactions at any time. 
          MHS may request updates and confirmations of any information and documentation as frequently as needed to comply with the Central Bank of Kenya regulations.
        </p>
      </TermsSection>

      <TermsSection title="4. Termination of Account">
        <p>
          4.1 MHS reserves the right, in its sole discretion, to suspend or terminate the Account or access to the Service, at any time, 
          with or without cause, with or without notice. Grounds for termination may include but are not limited to breach of these Terms.
        </p>
        <p>
          4.2 Upon termination, all rights and licenses granted to the User under these Terms shall immediately cease.
        </p>
      </TermsSection>

      <TermsSection title="5. Governing Law">
        <p>
          5.1 These Terms and the use of the Site and Service are governed by and construed in accordance with the laws of Kenya, 
          without regard to its conflict of law provisions.
        </p>
        <p>
          5.2 Any disputes arising out of these Terms or use of the Site and Service will be resolved in the courts located in Kenya.
        </p>
      </TermsSection>
    </div>
      
    </div>

  </section>
);

// Separate TermsSection component for better structure and reusability
const TermsSection = ({ title, children }) => (
  <div className={`${styles.paragraph} mt-5`}>
    <h3 className={styles.heading3}>{title}</h3>
    {children}
  </div>
);

export default CardDeal;
