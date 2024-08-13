import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
	return (
		<div className="relative flex flex-1 flex-col w-full max-sm:w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-2xl">
			{/* Product image */}
			<img
				src={imgURL}
				alt={name} // Alt text for accessibility
				className="w-[280px] h-[280px] object-cover rounded-t-lg" // Fixed width and height for the product image
			/>
			<div className="p-4 bg-white rounded-b-lg flex flex-col h-full">
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
						(4.5)
					</p>
				</div>

				{/* Display the product name */}
				<h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
					{name}
				</h3>

				{/* Display the product price */}
				<p className="mt-auto font-semibold font-montserrat text-coral-red leading-normal">
					{price}
				</p>
			</div>
		</div>
	);
};

export default PopularProductCard;
