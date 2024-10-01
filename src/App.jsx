import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./style";
import {
	Billing,
	Business,
	Offering,
	Clients,
	CTA,
	Footer,
	Navbar,
	Stats,
	Testimonials,
	Hero,
	PrivacyP,
	TermsOfService,
	ReturnPolicy,
	ComplianceCertificate,
	FAQ,
	PaymentProcessing,
	MultiplePaymentOptions,
	OnboardingProcess,
	Solutions,
	AboutUs,
	ContactUs,
	DownloadApps,
	Products,
} from "./components";
import Mission from "./components/Mission";

const App = () => (

	<Router>
		<Navbar />
		{/*
								<Billing />
								<PaymentProcessing />
								<MultiplePaymentOptions />
		*/}
		<div className={`bg-white ${styles.flexStart}`}>
			<div className="">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Hero />
								<Stats />
								<Mission />
								<Business />
								<Offering />
								<Products />
								<OnboardingProcess />
								<Clients />
								<DownloadApps />
							</>
						}
					/>
					<Route path="/privacy-policy" element={<PrivacyP />} />
					<Route path="/terms-of-service" element={<TermsOfService />} />
					<Route path="/return-policy" element={<ReturnPolicy />} />
					<Route path="/compliance-certificate" element={<ComplianceCertificate />} />
					<Route path="/faqs" element={<FAQ />} />
					<Route path="/solutions" element={<Solutions />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/contact-us" element={<ContactUs />} />
				</Routes>
			</div>
		</div>

		<Footer />
	</Router>
);

export default App;
