import React from "react";

// This component renders the page title for the store front
export default function Title() {
	return (
		<div>
			{/* The main heading of the page */}
			<h1 className="display-1 pageTitle text-center fw-bold">
				Welcome to <span className="bungee">Fake Store</span>
			</h1>
			{/* The sub-heading of the page */}
			<h4 className="display-5 pageTitle text-center">
				Where Everything is Fake, and Your Money isn't Any Good.
			</h4>
		</div>
	);
}
