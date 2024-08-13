// Import assets and constants
import { headerLogo } from "../assets/images"; // Import the logo image for the header
import { hamburger } from "../assets/icons"; // Import the hamburger icon for mobile menu
import { navLinks } from "../constants"; // Import navigation links data

const Nav = () => {
	return (
		// Header section with padding and positioning
		<header className="padding-x py-8 absolute z-10 w-full">
			{/* Navigation bar container */}
			<nav className="flex justify-between items-center max-container">
				{/* Logo section with a link to the home page */}
				<a href="/">
					<img
						src={headerLogo} // Source of the logo image
						alt="Logo" // Alt text for accessibility
						width={130} // Width of the logo image
						height={29} // Height of the logo image
					/>
				</a>
				{/* Navigation links displayed in a row, hidden on small screens */}
				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
					{/* Map through navLinks to generate list items */}
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href} // Link destination
								className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition duration-200 ease-in-out"
							>
								{item.label} {/* Link text */}
							</a>
						</li>
					))}
				</ul>
				{/* Hamburger menu icon for mobile screens */}
				<div className="hidden max-lg:block">
					<img
						src={hamburger} // Source of the hamburger icon image
						alt="Hamburger" // Alt text for accessibility
						width={25} // Width of the hamburger icon image
						height={25} // Height of the hamburger icon image
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav; // Export the Nav component for use in other parts of the application
