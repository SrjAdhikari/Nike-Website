import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
	return (
		<section
			id="home" // Unique identifier for this section, useful for navigation and linking
			className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
			// Full width container with responsive flex layout (row on large screens, column on smaller screens)
		>
			{/* Container for the content on the left side with relative positioning for overlapping elements */}
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
				{/* Subtitle for the summer collection with coral-red color */}
				<p className="text-xl font-montserrat text-coral-red">
					Our Summer Collection
				</p>

				{/* Main heading with large text size, different size for small screens, and bold font */}
				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
					{/* Highlighted text with white background on large screens */}
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					{/* Nike text in coral-red color */}
					<span className="text-coral-red inline-block mt-3">
						Nike
					</span>{" "}
					Shoes
				</h1>

				{/* Description paragraph with slate-gray color, large text, and comfortable line spacing */}
				<p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
					Discover stylish Nike arrivals, quality comfort, and
					innovation for your active life.
				</p>

				{/* Call-to-action button with "Shop now" label and an icon */}
				<Button label="Shop now" iconURL={arrowRight} />

				{/* Container for displaying statistics with flexible wrapping */}
				<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
					{statistics.map((stat) => (
						<div key={stat.label}>
							{/* Statistic value with large text size and bold font */}
							<p className="text-4xl font-palanquin font-bold">
								{stat.value}
							</p>

							{/* Statistic label with slate-gray color and comfortable line spacing */}
							<p className="leading-7 font-montserrat text-slate-gray">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>

			<div
				// Container for the shoe image section
				className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
			>
				{/* Display the currently selected big shoe image */}
				<img
					src={bigShoeImg} // Source of the shoe image to display
					alt="Shoe Collection" // Alt text for accessibility
					width={610} // Set image width
					height={500} // Set image height
					className="object-contain relative z-10"
					// 'object-contain' scales the image to fit its container while maintaining aspect ratio
					// 'relative' positions the image relative to its normal position
					// 'z-10' sets the z-index to 10, ensuring the image appears above other elements
				/>

				{/* Container for the shoe cards, positioned absolutely to overlap the image */}
				<div
					className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"
					// Container for the shoe cards
					// 'flex' makes the container a flexbox
					// 'sm:gap-6' sets the gap between items on small screens and larger
					// 'gap-4' sets the gap between items on screens smaller than small
					// 'absolute' positions the container absolutely within its nearest positioned ancestor
					// '-bottom-[5%]' positions the container 5% from the bottom of its containing element
					// 'sm:left-[10%]' positions the container 10% from the left on small screens and larger
					// 'max-sm:px-6' adds padding on the x-axis on screens smaller than small
				>
					{/* Map through the shoes array to create a ShoeCard for each shoe */}
					{shoes.map((shoe, index) => (
						<div key={index}>
							{/* Using index as key (less ideal) */}
							<ShoeCard
								index={index}
								imgURL={shoe} // Passes the shoe image URL to the ShoeCard component
								changeBigShoeImage={(shoe) =>
									setBigShoeImg(shoe)
								} // Function to update the big shoe image on click
								bigShoeImg={bigShoeImg} // Pass the current big shoe image to highlight the selected card
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
