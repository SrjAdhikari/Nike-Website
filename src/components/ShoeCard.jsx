const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
	// Handler function for click events
	const handleClick = () => {
		// Change the main displayed shoe image if it's not already the current one
		if (bigShoeImg !== imgURL.bigShoe) {
			// Update the displayed big shoe image
			changeBigShoeImage(imgURL.bigShoe);
		}
	};

	return (
		<div
			// Conditional border styling based on whether the shoe image is currently selected
			className={`border-2 rounded-xl ${
				bigShoeImg === imgURL.bigShoe
					? "border-coral-red" // Highlight the border if this shoe image is currently selected
					: "border-transparent" // Make the border transparent if not selected
			} cursor-pointer max-sm:flex-1`} // Add cursor pointer and adjust flex properties for small screens
			onClick={handleClick} // Attach the click handler
		>
			<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
				<img
					src={imgURL.thumbnail}
					alt="shoe collection" // Alt text for accessibility
					width={127}
					height={103.34}
					className="object-contain" // Ensure image is contained within the div without distortion
				/>
			</div>
		</div>
	);
};

export default ShoeCard;
