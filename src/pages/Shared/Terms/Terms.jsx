import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
	return (
		<div>
			<h2>Terms and condition</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
				nesciunt itaque dolor reiciendis molestiae hic repellat sequi blanditiis
				debitis, earum cum. Provident eveniet ut cumque quam assumenda eum
				reprehenderit quibusdam.
			</p>
			<p>
				go back to <Link to="/register">Register</Link>
			</p>
		</div>
	);
};

export default Terms;
