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
	// Testimonials,
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
import Blogs from "./components/blogs/Blogs";
import BlogDetail from "./components/blogs/BlogDetail";
import PartnersPage from './components/partners/PartnersPage';
import Testimonials from './components/testimonials/Testimonials';

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
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/blog/:id" element={<BlogDetail />} />
					<Route path="/partners" element={<PartnersPage />} />
					<Route path="/testimonials" element={<Testimonials />} />

				</Routes>
			</div>
		</div>

		<Footer />
	</Router>
);

export default App;
