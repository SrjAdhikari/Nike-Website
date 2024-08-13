const ServiceCard = ({ imgURL, label, subtext }) => {
	return (
		<div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
			{/* Container with responsive width, rounded corners, shadow, and padding */}
			{/* Flex container to ensure items are centered and responsive */}

			<div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
				{/* Circle container for the icon */}
				{/* Centered icon with a background color and rounded corners */}
				<img src={imgURL} alt={label} width={24} height={24} />
				{/* Icon image with specified width and height */}
			</div>

			<h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
				{/* Service title with top margin, large font size, and bold text */}
				{label}
			</h3>

			<p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
				{/* Description text with top margin, word break for long words, normal line height, and gray color */}
				{subtext}
			</p>
		</div>
	);
};

export default ServiceCard;
