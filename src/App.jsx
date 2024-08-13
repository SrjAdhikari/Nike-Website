import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

const App = () => (
	<main className="relative">
		{/* Navigation bar */}
		<Nav />

		{/* Hero section with large padding on left and right */}
		<section className="xl:padding-l wide:padding-r padding-b">
			<Hero />
		</section>

		{/* Popular Products section with standard padding */}
		<section className="padding">
			<PopularProducts />
		</section>

		{/* Super Quality section with standard padding */}
		<section className="padding">
			<SuperQuality />
		</section>

		{/* Services section with horizontal padding and vertical padding of 10 */}
		<section className="padding-x py-10">
			<Services />
		</section>

		{/* Special Offer section with standard padding */}
		<section className="padding">
			<SpecialOffer />
		</section>

		{/* Customer Reviews section with pale blue background and standard padding */}
		<section className="bg-pale-blue padding">
			<CustomerReviews />
		</section>

		{/* Subscribe section with horizontal padding and responsive vertical padding */}
		<section className="padding-x sm:py-32 py-16 w-full">
			<Subscribe />
		</section>

		{/* Footer section with black background and padding */}
		<section className="bg-black padding-x padding-t pb-8">
			<Footer />
		</section>
	</main>
);

export default App;
