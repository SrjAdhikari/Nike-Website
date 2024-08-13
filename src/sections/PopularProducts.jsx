import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

// Functional component to display a list of popular products
const PopularProducts = () => {
	return (
		<section id="products" className="max-container max-sm:mt-12">
			{/* Section header and description */}
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold">
					Our <span className="text-coral-red">Popular</span> Products
				</h2>

				<p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
					Experience top-notch quality and style with our sought-after
					selections. Discover a world of comfort, design, and value.
				</p>
			</div>

			{/* Grid layout for displaying popular product cards */}
			<div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
				{/* Iterate through the products array and render a PopularProductCard for each product */}
				{products.map((product) => (
					<PopularProductCard key={product.name} {...product} />
				))}
			</div>
		</section>
	);
};

export default PopularProducts;
