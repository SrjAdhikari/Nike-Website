import { services } from "../constants/";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
	return (
		// Section container with maximum width and flexible wrapping
		// Centering content horizontally and adding gap between items
		<section className="max-container flex justify-center flex-wrap gap-9">
			{/* Iterating through the services array and rendering a ServiceCard for each service */}
			{/* The 'key' prop ensures each ServiceCard is uniquely identified */}
			{/* Spreading the service object properties as props to ServiceCard */}
			{services.map((service) => (
				<ServiceCard key={service.label} {...service} />
			))}
		</section>
	);
};

export default Services;
