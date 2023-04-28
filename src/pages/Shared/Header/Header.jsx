import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
	return (
		<Container className="mt-4">
			<div className="text-center">
				<img src={logo} alt="" />
				<p className="text-secondary">
					<small>Journalism Without Fear or Favor</small>
				</p>
				<p>{moment().format("dddd, MMMM D, YYYY")}</p>
			</div>
			<div className="d-flex bg-secondary p-2">
				<Button variant="danger">Latest</Button>
				<Marquee className="m-2 text-white" speed={100}>
					Match Highlights: Germany vs Spain — as it happened ! Match
					Highlights: Germany vs Spain as...Match Highlights: Germany vs Spain —
					as it happened ! Match Highlights: Germany vs Spain as...
				</Marquee>
			</div>
		</Container>
	);
};

export default Header;
