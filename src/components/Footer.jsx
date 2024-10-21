import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import SubscriptionForm from '../components/subscription/Subscrption';

const Footer = () => {
	return (
		<section className="pt-4  ">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between py-4 md:mt-0 mt-10">
					
					{/* Footer Links Section */}
					<div className="flex flex-wrap gap-8">
						{footerLinks.map((footerlink) => (
							<div key={footerlink.title} className="min-w-[150px]">
								<p className="font-semibold">
									{footerlink.title}
								</p>
								<ul className="mt-3">
									{footerlink.links.map((link) => (
										<li
											key={link.name}
											className="py-1.5 transition-colors hover:text-secondary cursor-pointer "
										>
											<a href={link.link || ""} rel="noopener noreferrer">
												{link.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* Location and Address Section */}
					<div className="location-info  rounded-md mb-4 ">
						<h2 className=" font-semibold  mb-4">Location & Address</h2>
						<p className="text-gray-700 mb-2">
							<strong>Address:</strong> Wu-Yi Plaza, Galana Road, Kilimani, Nairobi, Kenya
						</p>
						<p className="text-gray-700 mb-2">
							<strong>Phone:</strong> +254 103 102 336
						</p>
						<p className="text-gray-700 mb-2">
							<strong>Email:</strong> <a href="mailto:hello@mam-laka.com" className="">hello@mam-laka.com</a>
						</p>
						<p className="text-gray-700 mb-2">
							<strong>Hours:</strong> Monday - Friday 08:00 - 18:00
						</p>
					</div>
				</div>

				<div className="flex justify-between items-center mt-14 flex-wrap gap-8">
					<a href="/" className="shrink-0">
						<img
							src={logo}
							alt="Logo"
							className="h-16"
						/>
					</a>

					<div className="w-full max-w-xs">
						<p className="opacity-80">
							<SubscriptionForm />
						</p>
					</div>
				</div>

				<hr className="my-4 border-gray-600" />

				<div className="flex justify-between gap-2 items-center md:flex-row flex-col pb-2 text-gray-300">
					<p className="text-sm opacity-80">
						Copyright Ⓒ 2016 - {new Date().getFullYear()} Mamlaka Hub & Spoke. All Rights Reserved.
					</p>

					{/* Social Media Icons */}
					<div className="flex gap-4">
						{socialMedia.map((social) => {
							// Determine the icon based on the id
							let Icon;
							switch (social.id) {
								case "social-media-2":
									Icon = FaFacebookF;
									break;
								case "social-media-4":
									Icon = FaLinkedinIn;
									break;
								case "social-media-3":
									Icon = FaTwitter;
									break;
								default:
									return null;
							}

							return (
								<div
									key={social.id}
									className="rounded-full p-2 grid-centered cursor-pointer"
									style={{ backgroundColor: social.color }}
									onClick={() => window.open(social.link)}
								>
									<Icon className="text-white" /> {/* Icon color */}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
