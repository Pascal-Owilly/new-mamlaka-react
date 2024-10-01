import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { CloseIcon, MenuIcon } from "./icons";

const Navbar = () => {
	const [active, setActive] = useState("Home");
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="">
			<div className="container py-4 flex justify-between items-center">
				<a href="/">
					<img src={logo} alt="logo" className="h-16" />
				</a>

				{/* Desktop view */}
				<div className="hidden sm:gap-x-4 sm:flex sm:items-center">
					{navLinks.map((nav) => (
						<a
							key={nav.title}
							href={nav.url}
							className={[
								`cursor-pointer ${active === nav.title && "text-primary"}`,
								'hover:text-primary transition-colors'
							].join(' ')}
							onClick={() => setActive(nav.title)}
						>
							{nav.title}
						</a>
					))}
				</div>

				{/* Mobile view */}
				<div className="sm:hidden relative z-50 flex flex-1 justify-end items-center">
					<button
						className="size-7"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <MenuIcon /> : <CloseIcon />}
					</button>


					<div
						className={[
							!isOpen ? "hidden" : "block",
							"py-6 bg-white shadow-xl absolute top-8 -right-2",
							"mx-4 my-2 min-w-[140px] rounded-lg border border-gray-200 sidebar",
						].join(' ')}
					>

						{navLinks.map((nav) => (
							<a
								key={nav.title}
								href={nav.url}
								className={[
									`block min-w-64 px-6 py-2 cursor-pointer ${active === nav.title && "text-primary"}`,
									'hover:text-primary transition-colors'
								].join(' ')}
								onClick={() => setActive(nav.title)}
							>
								{nav.title}
							</a>
						))}
					</div>
				</div>
			</div>

		</nav>
	);
};

export default Navbar;
