import { NavItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Menu({ cart }) {
	// Determine whether to show the cart badge or not
	const showMe = cart.length > 0 ? "" : "visually-hidden";

	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					{/* Display the FakeStore logo */}
					<Navbar.Brand>
						<Link to="/" className="text-decoration-none text-white bungee">
							FakeStore
						</Link>
					</Navbar.Brand>
<NavItem><Link to="/FAQ" className="text-decoration-none text-white bungee fw-bolder">FAQ</Link> </NavItem>
					{/* Display the cart icon and its badge */}
					<NavItem>
						<Link to="/cart">
							<button
								type="button"
								className="btn position-relative bg-transparent text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="40"
									viewBox="0 96 960 960"
									width="40"
									className="fillSVG"
								>
									<path d="M277.362 971.229q-30.855 0-52.313-21.71-21.458-21.71-21.458-52.671t21.632-52.494q21.631-21.533 52.482-21.533 30.85 0 52.444 21.71t21.594 52.671q0 30.961-21.71 52.494t-52.671 21.533Zm403.691 0q-30.855 0-52.313-21.71-21.458-21.71-21.458-52.671t21.632-52.494q21.631-21.533 52.482-21.533t52.445 21.71q21.594 21.71 21.594 52.671t-21.711 52.494q-21.71 21.533-52.671 21.533Zm-481.36-724.305h591.001q24.035 0 36.349 21.09 12.314 21.09.185 42.859l-138.009 248.53q-10.309 18.557-28.523 30.217-18.213 11.661-39.567 11.661H318.667l-44.257 80.257q-2.821 4.615-.064 10t8.526 5.385h473.896v67.588H272.667q-43.845 0-63.23-33.55-19.384-33.551-.102-70.038l59.282-109.693-149.333-316.308H39.951v-67.588h122.152l37.59 79.59Z" />
								</svg>

								{/* Show the cart badge */}
								<div className={showMe}>
									<span className="position-absolute ms-3 mt-2 translate-middle badge rounded-pill bg-danger">
										{cart.length}
										<span className="visually-hidden">Items in Cart</span>
									</span>
								</div>
							</button>
						</Link>
					</NavItem>
				</Container>
			</Navbar>
		</>
	);
}

export default Menu;
