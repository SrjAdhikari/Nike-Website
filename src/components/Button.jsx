const Button = ({
	label,
	iconURL,
	backgroundColor,
	textColor,
	borderColor,
	fullWidth,
}) => {
	return (
		// Button element with flexbox for alignment, padding, border, and background color
		<button
			// Button element with conditional styling
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
		${
			backgroundColor // Conditional classes for background color, text color, and border color
				? `${backgroundColor} ${textColor} ${borderColor}` // Use provided colors if available
				: "bg-coral-red text-white border-coral-red" // Default styling if no colors are provided
		} rounded-full ${fullWidth && "w-full"}`} // Add full width class if fullWidth is true
		>
			{/* Button label passed as a prop */}
			{label}

			{/* Image element for the icon, styled with margin, rounded corners, and fixed size */}
			{iconURL && (
				// Conditionally render the image only if `iconURL` is provided
				<img
					src={iconURL}
					alt="arrow-right-icon" // Alt text for accessibility
					className="ml-2 rounded-full w-5 h-5" // Margin-left for spacing, rounded corners, and size
				/>
			)}
		</button>
	);
};

export default Button;
