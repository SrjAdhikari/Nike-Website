import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex justify-center items-center flex-col">
			{/* Customer's profile image */}
			<img
				src={imgURL}
				alt="customer" // Alternative text for accessibility
				className="rounded-full object-cover w-[120px] h-[120px]" // Circular image with specified dimensions
			/>
			{/* Customer feedback text */}
			<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
			{/* Rating display */}
			<div className="mt-3 flex justify-center items-center gap-2.5">
				<img
					src={star}
					width={24}
					height={24}
					alt="rating star" // Alternative text for accessibility
					className="object-contain m-0" // Image styling to contain within its box
				/>
				<p className="text-xl font-montserrat text-slate-gray">
					{/* Rating value */}({rating})
				</p>
			</div>
			{/* Customer's name */}
			<h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
