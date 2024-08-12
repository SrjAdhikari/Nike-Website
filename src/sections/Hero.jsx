import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics } from "../constants";

const Hero = () => {
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
		</section>
	);
};

export default Hero;
