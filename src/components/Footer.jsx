import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
	return (
		<section className="pt-4">
			<div className="container">
				<div className="flex py-4 justify-between flex-wrap md:mt-0 mt-10">
					{footerLinks.map((footerlink) => (
						<div key={footerlink.title} className="min-w-[150px]">
							<p className="font-semibold text-lg">
								{footerlink.title}
							</p>
							<ul className="mt-3">
								{footerlink.links.map((link) => (
									<li
										key={link.name}
										className="py-1.5 transition-colors hover:text-secondary cursor-pointer"
									>
										<a href={link.link || ""} target="_blank" rel="noopener noreferrer">
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="flex justify-between gap-12 mt-14">
					<a href="/" className="shrink-0">
						<img
							src={logo}
							alt="Logo"
							className="h-16"
						/>
					</a>

					<div>
						<p className="text-xl font-semibold">Get Started Today</p>
						<p className="opacity-80">
							Join now and experience seamless, secure, and fast trade financing.
						</p>
					</div>
				</div>

				<hr className="my-4" />

				<div className="flex justify-between gap-2 items-center md:flex-row flex-col pb-2">
					<p className="text-sm opacity-80">
						Copyright Ⓒ 2016 - {new Date().getFullYear()} Mamlaka Hub & Spoke. All Rights Reserved.
					</p>

					<div className="flex gap-2">
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
									className="rounded-full p-2 grid-centered"
									style={{ backgroundColor: social.color }}
									onClick={() => window.open(social.link)}
								>
									<Icon className="text-white" /> {/* Change the color as needed */}
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
