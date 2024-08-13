import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
	return (
		<div className="flex flex-1 flex-col w-full max-sm:w-full">
			{/* Product image */}
			<img
				src={imgURL}
				alt={name} // Alt text for accessibility
				className="w-[280px] h-[280px]" // Fixed width and height for the product image
			/>
			<div className="mt-8 flex justify-start gap-2.5">
				{/* Star rating icon */}
				<img
					src={star}
					alt="rating" // Alt text for accessibility
					width={24} // Width of the star icon
					height={24} // Height of the star icon
				/>

				{/* Product rating */}
				<p className="font-montserrat text-xl leading-normal text-slate-gray">
					(4.5) // Display the rating
				</p>
			</div>

			{/* Display the product name */}
			<h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
				{name}
			</h3>

			{/* Display the product price */}
			<p className="mt-2 font-semibold font-montserrat text-coral-red leading-normal">
				{price}
			</p>
		</div>
	);
};

export default PopularProductCard;
