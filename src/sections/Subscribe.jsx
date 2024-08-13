import Button from "../components/Button";

const Subscribe = () => {
	return (
		<section
			id="contact-us" // Unique identifier for the section, useful for navigation and linking
			className="max-container flex justify-between items-center max-lg:flex-col gap-10"
		>
			{/* Heading for the subscription section with large text and bold font */}
			<h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
				Sign Up for
				<span className="text-coral-red"> Updates </span>& Newsletter
			</h3>

			{/* Container for the input field and button, styled as a rounded border box */}
			<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
				{/* Input field for email address with placeholder text */}
				<input
					type="text"
					placeholder="subscribe@nike.com" // Placeholder text for the email input
					className="input" // Custom class for styling the input field
				/>
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					{/* Sign Up button with full width on smaller screens */}
					<Button label="Sign Up" fullWidth />
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
