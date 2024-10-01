import React from 'react';
import styles, { layout } from "../style";

const Home = () => {
  return (
    <div className={`${styles.boxWidth} mx-auto`}>
      {/* Hero Section */}
      <section className={`${styles.flexCenter} ${styles.paddingY}`} style={{background:'#222b5b'}}>
        <div>
          <h2 className={`${styles.heading2} text-white text-center`}>
            Welcome to Our Privacy Policy Page
          </h2>
          <p className={`${styles.paragraph} mt-4 text-center text-white`}>
            We value your privacy and are committed to protecting your personal data.
          </p>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <h3 className={`${styles.heading2} text-left`}>What Personal Data Do We Collect?</h3>
        <p className={`${styles.paragraph} mt-4`}>
          Personal data means any data that, either on its own or jointly with other data, can
          be used to identify a natural person. You directly provide us with such data when you
          use our websites or interact with us.
        </p>

        {/* Example List */}
        <ul className="list-disc ml-5 mt-4">
          <li className={`${styles.paragraph} mt-2 font-bitter font-bold`} style={{fontWeight:'600'}}>Registration Information</li>
          &nbsp; <ol>
            <li style={{listStyleType:'circle'}}>
            When you register to use our Services by creating an Account, we
            will collect Personal Data as necessary to fulfill the Services you request. Depending on the
            Services you choose, we may require you to provide us with your name, email address or
            phone number to establish an Account. We may require you to provide us with additional
            Personal Data as you use our Services
            </li>
          </ol>
          <li className={`${styles.paragraph} mt-2 font-bitter font-bold`} style={{fontWeight:'600'}}>Transaction and experience information</li>
          &nbsp; <ol>
            <li style={{listStyleType:'circle'}}>
            When you use our Services or access our Sites,
            for example, to make purchases from merchants, or to process payments, we collect information
            about the transaction, as well as other information associated with the transaction such as
            amount paid for products or services, merchant information, including information about the
            payment method used to complete the transaction, Device Information and Technical Usage
            Data.
            </li>
          </ol>
          <li className={`${styles.paragraph} mt-2 font-bitter font-bold`} style={{fontWeight:'600'}}>Information that you choose to provide us to obtain additional Services or specific online
          Services</li>
          &nbsp; <ol>
            <li style={{listStyleType:'circle'}}>
            If you request or participate in an optional Site feature, or request enhanced
Services, we may collect additional information from you. We will provide you with a separate
notice at the time of collection, if the use of that information differs from the uses disclosed in
this Privacy Policy.
            </li>
          </ol>
          <li className={`${styles.paragraph} mt-2 font-bitter font-bold`} style={{fontWeight:'600'}}>Personal Data about you if you use unbranded Services</li>
          &nbsp; <ol>
            <li style={{listStyleType:'circle'}}>
            Vertain Services are available
without being required to log in to or establish an Account with Pesapal. For instance, we collectPersonal Data when you are interacting with and making payments to merchants, on their sites
and checkout with Pesapal without logging into an account. For our unbranded payment
services, your interaction is with the merchant, on their platform. If you are an Account holder, or
create an Account at a later date, we may collect information about such unbranded
transactions and associate them with your Account to improve your customer experience as an
Account holder and for compliance and analytics purposes. If you are not an Account holder, we
will collect and store all information you provide and use such information in accordance with
this Privacy Policy.
            </li>
          </ol>

          <li className={`${styles.paragraph} mt-2 font-bitter font-bold`} style={{fontWeight:'600'}}>Other information we collect related to your use of our Sites or Services</li>
          &nbsp; <ol>
            <li style={{listStyleType:'circle'}}>
            We may collect
additional information from or about you when you communicate with us, contact our customer
support teams or respond to a survey.
            </li>
          </ol>

        </ul>
      </section>

      {/* Why We Collect Personal Data */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <h3 className={`${styles.heading2} text-left`}>Why Do We Retain Personal Data?</h3>
        <p className={`${styles.paragraph} mt-4`}>
        We retain your personal information, in the first instance, for as long as required by a relevant
        law (e.g. to ensure compliance with tax requirements); or if a relevant law no longer requires us
        to maintain Personal Information (or that period has elapsed), the Personal Information may
        then still be retained if required by any relevant contractual agreement or arrangement; and for
        Personal Information to which a relevant law or contractual agreement or arrangement does not
        apply, we will retain the Personal Information for as long as is required to manage our
        engagement and/or relationship with you plus a reasonable period afterwards.
        </p>
        <p className={`${styles.paragraph} mt-4`}>
        If your Account is closed, we may take steps to mask Personal Data and other information, but
        we reserve our ability to retain and access the data for so long as required to comply with
        applicable laws. We will continue to use and disclose such Personal Data in accordance with
        this Privacy Policy
        </p>

      </section>

      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <h3 className={`${styles.heading2} text-left`}>How Do We Process Personal Data?</h3>
        <p className={`${styles.paragraph} mt-4`}>
        We may use your personal data for the following purposes:
<br />
<span style={{fontWeight:'600'}}>
Provision of our Services, including to:

</span>
        </p>
         
          <li>
          Initiate a payment, or pay a bill;
          </li>
          <li>
          Authenticate your access to an Account;
          </li>
          <li>
          Communicate with you about your Account, the Sites, the Services, or Pesapal; sending
            you information about our services that may interest you or help us serve you better. If
            you do not want to receive these types of information, you can opt out at any time.
          </li>
          <li>
          Perform Account application evaluations and compare information for accuracy and
          verification purposes.
          </li>
          <li>
          keep your Account and financial information up to date.

          </li>
<br />
          <span style={{fontWeight:'600'}}>
          To manage our operational needs,

</span>
 such as monitoring, analyzing, and improving the Services
and the Sites’ performance and functionality. For example, we analyze User behavior and
perform research about the way you use our Services.
<p></p><br />
<span style={{fontWeight:'600'}}>
To manage risk and protect the Sites, the Services and you &nbsp;
</span>
 from fraud by verifying your
identity. Mamlaka’s risk and fraud tools use Personal Data, Device Information, Technical Usage
Data and Geolocation Information from our Sites and website that other Mamlaka Services to
help detect and prevent fraud and abuse of the Services.
<br />
<br />
<span style={{fontWeight:'600'}}>
To market &nbsp;
</span>

to you Mamlaka products and Services and the products and services of unaffiliated
businesses. We may also process your Personal Data to uniquely tailor the marketing content
and certain Services or Site experiences to better match your interests on Mamlaka and other
third-party websites.
<br />
<br />

<span style={{fontWeight:'600'}}>
To provide personalized Services &nbsp;
</span>

 offered by Mamlaka. We may use your Personal Data and
other information collected in accordance with this Privacy Policy to provide a targeted display,
feature, Services or offer to you on our sites. We may use cookies and other tracking
technologies to provide these online services and/or personalize your experience to your unique
needs.
<br />
<br />

<span style={{fontWeight:'600'}}>
To market &nbsp;
</span>

to you Mamlaka products and Services and the products and services of unaffiliated
businesses. We may also process your Personal Data to uniquely tailor the marketing content
and certain Services or Site experiences to better match your interests on Mamlaka and other
third-party websites.
<br />
<br />

<span style={{fontWeight:'600'}}>
To provide you with location-specific options &nbsp;
</span>

, functionality or offers if you elect to share your
Geolocation Information through the Services. We will use this information to enhance the
security of the Sites and Services and provide you with location- based Services, such as
advertising, search results, and other personalized content.
<br />
<br />

<span style={{fontWeight:'600'}}>
To comply with our obligations &nbsp;
</span>

 and to enforce the terms of our Sites and Services, including
to comply with all applicable laws and regulations.
<br />
<br />

<span style={{fontWeight:'600'}}>
To respond to your requests &nbsp;
</span>

, for example to contact you about a question you submitted to
our customer support team and better respond to your requests and support needs .
<br />
<br />

      </section>

      {/* How We Use Cookies */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <h3 className={`${styles.heading2} text-left`}>How Do We Use Cookies And Other Tracking Technologies?</h3>
        <p className={`${styles.paragraph} mt-4`}>
        When you visit our Sites, use our Services, or visit a third-party website for which we provide
online Services, we may use cookies and other tracking technologies (collectively, “Cookies”) to
recognize you as a User and to customize your online experiences, the Services you use, and
other online content and advertising; measure the effectiveness of promotions and perform
analytics; and to mitigate risk, prevent potential fraud, and promote trust and safety across our
Sites and Services.
        </p>
        <p>
        Mamlaka will not use cookies for any purposes not stated in this Policy. You can manage or
        delete cookies based on your own preferences.
        </p>
        <p>
        You can clear all the cookies stored on your computer, and most web browsers provide the
        option of blocking cookies.
        </p>
        <p>
        Please review our Cookie Policy to learn more about how we use Cookies.
        </p>

      </section>

      {/* How We Protect Your Data */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <h3 className={`${styles.heading2} text-left`}>How We Disclose Personal Data</h3>
        <p className={`${styles.paragraph} mt-4`}>
        Information about our customers is an important part of our business and we address sharing of
your data as such. We may disclose Personal Information that we collect from you for the
purpose(s) that it was collected. We may disclose the Personal Information for other purposes
where we have received your consent to do so or are required to do so by law.
        </p>

        <br />

    <h1 className={`${styles.heading3} text-primary text-3xl font-bold`}>
    Examples of where we may disclose your information include, <br /> but are not limited to:
    </h1>

        <ul className="list-disc ml-5 mt-4">
          <li className={`${styles.paragraph} mt-2`}>
          <span style={{fontWeight:'600'}}>
With other companies that provide services to us: &nbsp;
</span>
           We may share Personal Data with
third-party service providers that perform services and functions at our direction and on
our behalf. These third-party service providers may, for example, provide you with
Services, verify your identity or assist in processing transactions
          </li>
          <li className={`${styles.paragraph} mt-2`}>
          <span style={{fontWeight:'600'}}>
          With other financial institutions: &nbsp;
</span>
 We may share Personal Data with other financial
institutions that we have partnered with to offer a product. These financial institutions
may only use this information to offer Mamlaka-related products, unless you have given
consent for other uses. We may also share Personal Data to process transactions, and
keep your financial information up to date.
          </li>
          <li className={`${styles.paragraph} mt-2`}>
          <span style={{fontWeight:'600'}}>
          With the other parties to transactions when you use the Services, &nbsp;
</span>
 such as
merchants: We may share information about you and your account with the other parties
involved in processing your transactions. This includes merchants, when you use our
Services to pay for goods or services. The information includes:
          </li>
          <li className={`${styles.paragraph} mt-2`}>
          <span style={{fontWeight:'600'}}>
With other companies that provide services to us: &nbsp;
</span>
           We may share Personal Data with
third-party service providers that perform services and functions at our direction and on
our behalf. These third-party service providers may, for example, provide you with
Services, verify your identity or assist in processing transactions. This includes merchants, when you use our
Services to pay for goods or services. The information includes:
          </li>
          <ul>
          <li className={`${styles.paragraph} mt-2`}>
          Personal Data and Account information necessary to facilitate the transaction;
            </li>
            <li className={`${styles.paragraph} mt-2`}>
            Information to help other participant(s) resolve disputes and detect and prevent
            fraud; and
            </li>
            <li className={`${styles.paragraph} mt-2`}>
            Aggregated data and performance analytics to help merchants better understand
            Users and to help merchants enhance Users’ experiences.
            </li>


          </ul>

          <li className={`${styles.paragraph} mt-2`}>
          <span style={{fontWeight:'600'}}>
          With other third parties for our business purposes or as permitted or required by
law: &nbsp;
</span>
We may share information about you with other parties for Pesapal’s business
purposes or as permitted or required by law, including:
          </li>
          <ul>
            <li style={{listStyleType:'circle'}}>
            if we need to do so to comply with a law, legal process or regulations;
            </li>
            <li style={{listStyleType:'circle'}}>
            To comply with applicable laws or respond to valid legal procedures, we may
disclose your personal data to regulators, law enforcement or other government
agencies; or when we believe, in our sole discretion, that the disclosure of
Personal Data is necessary or appropriate to prevent physical harm or financial○

loss; or to report suspected illegal activity or to investigate violations of a user
agreement;
            </li>
            <li style={{listStyleType:'circle'}}>
            to protect the vital interests of a person;
</li>
<li style={{listStyleType:'circle'}}>
to protect our property, Services and legal rights;
</li>
<li style={{listStyleType:'circle'}}>
to facilitate a purchase or sale of all or part of Mamlaka’s business;
</li>
<li style={{listStyleType:'circle'}}>
to help assess and manage risk and prevent fraud against us, our Users and
fraud involving our Sites or use of our Services;</li>
<li style={{listStyleType:'circle'}}>
to help assess and manage risk and prevent fraud against us, our Users and
fraud involving our Sites or use of our Services;
</li>
<li style={{listStyleType:'circle'}}>
to help assess and manage risk and prevent fraud against us, our Users and
fraud involving our Sites or use of our Services;
</li>
<li style={{listStyleType:'circle'}}>
to support our audit, compliance, and corporate governance functions.
</li>

          </ul>
        </ul>
<br />
      <p>
      We do not share your Personal Data with third parties for their marketing purposes without your
      consent.
      </p>
      <br />
      <p>
      We will take reasonable steps to ensure that the Personal Information we use or disclose is
      accurate, up to date, complete and relevant to the purpose of the use or disclosure.
      </p>

      <h3 className={`${styles.heading2} text-left`}>How To Access & Control Your Personal Data</h3>
      <p>Subject to limitation set out in the Kenya Data Protection and Privacy Law, you have certain
rights in relation to your personal data. You have the right to request access to your data,
rectification and data portability.</p>
<p>
It is your responsibility to ensure that all personal data submitted to Mamlaka is correct.
Mamlaka is dedicated to maintaining the accuracy and completeness of personal data and
keeping the data up to date.

</p>
<p>
To the extent required by the Kenya Data Protection and Privacy Law, you may:
</p>
<br />
<ul>
● &nbsp; have the right to access certain personal data we maintain about you  <br />
● &nbsp; request that we update or correct inaccuracies in that data <br />
● &nbsp; object or restrict to our use of your personal data, and <br />
● &nbsp; ask us to delete your personal data from our platforms. <br />
</ul>
<br />
<p>
To exercise these rights, you may contact Pesapal Directly through the contacts provided in this
policy.
</p>
<br />
<h3 className={`${styles.heading2} text-left`}>How We Protect Your Personal Data</h3>
<p>
The security of your personal data is important to us and is our highest priority. We use
appropriate physical, management, and technical measures to protect your personal data from
unauthorized access, disclosure, use, modification, damage, or loss. The security measures
include:

<li>Implementing security measures such as: information access management, firewalls,
security monitoring, data encryption etc. where our security controls are independently
verified by an external auditor.</li>
<li>We use cryptographic technologies for transaction security and integrity such as
encryption, transmission of transaction information and ensuring that post transaction no
sensitive card information is stored on our systems.</li>
<li>
We maintain physical, electronic, and procedural safeguards in connection with the
collection, storage, and disclosure of personal information.</li>
</p>

<p>
While we are dedicated to securing our systems and Services, you are responsible for securing
and maintaining the privacy of your password(s) and Account/profile registration information and
verifying that the Personal Data we maintain about you is accurate and current.
</p>

<h3 className={`${styles.heading2} text-left`}>
International Transfers Of Your Personal Data
</h3>
<p>
Your personal data collected by Mamlakal may be processed or accessed in the country/region
where you use our products and services or in other countries/regions where Mamlaka have a
presence. These jurisdictions may have different data protection laws. In such circumstances,
Mamlaka will take measures to ensure that data is processed as required by this Policy and the
applicable national laws and regulations.
</p>

<h3 className={`${styles.heading2} text-left`}>
Updates To This Policy
</h3>
<p>
Mamlaka reserves the right to update or change this Policy at any time. We will release the
latest Privacy Policy on our website and appropriate channels for any changes. If major
changes are made to the Privacy Policy, we may notify you through different channels, for
example, posting a notice on our website or sending you a direct notification.
</p>
      </section>

      {/* Contact Us Section */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <h3 className={`${styles.heading2} text-left`}>How To Contact Us</h3>
        <p className={`${styles.paragraph} mt-4`}>
        If you have any questions or suggestions, privacy complaints or issues, and want to contact
        Mamlaka Data Protection Officer (DPO), please contact;
        </p>
        <ul className="ml-5 mt-4">
          <li className={`${styles.paragraph} mt-2`}><strong>Email:</strong> compliance@mam-laka.com</li>
          
        </ul>
      </section>
    </div>
  );
};

export default Home;
