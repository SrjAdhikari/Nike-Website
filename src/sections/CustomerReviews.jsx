import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
	return (
		<section className="max-container">
			{/* Section heading with centered alignment and bold font */}
			<h3 className="font-palanquin text-center text-4xl font-bold ">
				What Our <span className="text-coral-red">Customers</span> Say?
			</h3>

			{/* Description text with centered alignment, margin, and max width */}
			<p className="info-text m-auto mt-4 max-w-lg text-center">
				Hear genuine stories from our satisfied customers about their
				exceptional experiences with us.
			</p>

			{/* Container for review cards with flexible layout and gap */}
			<div className="mt-4 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
				{/* Mapping over reviews to create ReviewCard components */}
				{reviews.map((review) => (
					<ReviewCard
						key={review.customerName} // Unique key for each ReviewCard
						imgURL={review.imgURL} // URL for the customer's image
						customerName={review.customerName} // Customer's name
						rating={review.rating} // Customer's rating
						feedback={review.feedback} // Customer's feedback
					/>
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
