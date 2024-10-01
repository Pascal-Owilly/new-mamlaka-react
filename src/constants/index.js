import { facebook, linkedin, twitter } from "../assets";

import Zoho from '../assets/images/companies/zoho.svg'
import Sage from '../assets/images/companies/sage.svg'
import Shopify from '../assets/images/companies/shopify.png'
import Wix from '../assets/images/companies/wix.svg'
import Woo from '../assets/images/companies/woo.svg'
import Xero from '../assets/images/companies/xero.png'
import Qb from '../assets/images/companies/qb.png'

import { BadgeIcon, ShieldIcon, UsersIcon } from '../components/icons'

export const navLinks = [
	{
		title: "Solutions",
		url: "/solutions", // Link to the products page
	},
	{
		title: "About Us",
		url: "/about-us", // Link to the company page
	},
	{
		title: "FAQs",
		url: "/faqs", // Link to the FAQs page
	},
	{
		title: "Connect with us",
		url: "/contact-us", // Link to the contact page
	},
];


export const features = [
	// {
	//   id: "feature-1",
	//   icon: star,
	//   title: "Stellar Blockchain Technology",
	//   content:
	//     "Our blockchain solutions offer security, efficiency, and transparency for our seamless business growth.",
	// },
	{
		id: "feature-2",
		icon: ShieldIcon,
		color: "bg-blue-100 border-blue-300 text-blue-700",
		title: "100% Secured",
		content:
			"We take proactive steps make sure your information and transactions are secure.",
	},
	{
		id: "feature-3",
		icon: BadgeIcon,
		color: "bg-red-100 border-red-300 text-red-700",
		title: "100% Accredited",
		content:
			"MHS is PCI DSS and GDPR accredited, ensuring secure handling of cardholder data and compliance with data protection regulations, enhancing trust in our trade finance solutions..",
	},
	{
		id: "feature-3",
		icon: UsersIcon,
		color: "bg-green-100 border-green-300 text-green-700",
		title: "Customer centered",
		content:
			"we prioritize feedback to enhance our services and ensure an exceptional experience.",
	},
];

export const feedback = [
	{
		id: "feedback-1",
		content:
			"MHS transformed our trade finance with seamless payments and outstanding support. Highly recommended!",
		name: "Karen Nyambura",
		title: "Business Woman",

	},
	{
		id: "feedback-2",
		content:
			" Mhs systems made it easy for me to trade, easy, efficient and affordable.",
		name: "Mark Lucas",
		title: "Founder",

	},
	{
		id: "feedback-3",
		content:
			"It is usually people in the money business, finance, and international trade that are really rich.",
		name: "Kenn maina",
		title: "Business Man",

	},
];

export const stats = [
	{
		id: "stats-1",
		title: "Global Reach",

	},
	{
		id: "stats-2",
		title: "20 Countries",

	},
	{
		id: "stats-3",
		title: " 15 Currencies",

	},
];

export const footerLinks = [
	{
		title: "Useful Links",
		links: [
			{
				name: "Terms of Service",
				link: "/terms-of-service", // Internal link for Terms of Service
			},
			{
				name: "Privacy Policy",
				link: "/privacy-policy", // Internal link for Privacy Policy
			},
			{
				name: "Return Policy",
				link: "/return-policy", // Internal link for Return Policy
			},
			{
				name: "Compliance Certificate",
				link: "/compliance-certificate", // Internal link for Compliance Certificate
			},
		],
	},

	{
		title: "Company",
		links: [
			{
				name: "About Us",
				link: "/about-us",
			},

			// {
			//   name: "Blog",
			//   link: "",
			// },

		],
	},
	{
		title: "Partner",
		links: [
			// {
			//   name: "Our Partner",
			//   link: "",
			// },
			{
				name: "FAQs",
				link: "/faqs",
			},
		],
	},
];

export const socialMedia = [
	{
		id: "social-media-2",
		icon: facebook,
		link: "https://www.facebook.com/profile.php?id=61550738654440&_rdc=1&_rdr/",
		color: "#3b5998", // Facebook color
	},
	{
		id: "social-media-4",
		icon: linkedin,
		link: "https://ke.linkedin.com/company/mamlaka-hub-and-spoke",
		color: "#0077B5", // LinkedIn color
	},
	{
		id: "social-media-3",
		icon: twitter,
		link: "https://www.twitter.com/",
		color: "#1DA1F2", // Twitter color
	},
];


export const clients = [
	{
		id: "client-1",
		logo: Sage,
	},
	{
		id: "client-2",
		logo: Shopify,
	},
	{
		id: "client-3",
		logo: Wix,
	},
	{
		id: "client-4",
		logo: Woo,
	},
	{
		id: "client-1",
		logo: Zoho,
	},
	{
		id: "client-2",
		logo: Xero,
	},
	{
		id: "client-3",
		logo: Qb,
	},

];
