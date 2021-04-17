const Navbar = () => {
	const handleClick = (event) => {
		console.log("Hello world");
	};

	return (
		<div className="navbar">
			<h1> Navbar here </h1>
			<button onClick={handleClick}>About</button>
		</div>
	);
};

export default Navbar;
