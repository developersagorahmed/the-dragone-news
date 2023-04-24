import React from "react";
import qzome1 from "../../../assets/qZone1.png";
import qzome2 from "../../../assets/qZone2.png";
import qzome3 from "../../../assets/qZone3.png";

const QZone = () => {
	return (
		<div className="bg-secondary text-center my-4 py-4">
			<h4 className="">Q-Zone</h4>
			<div>
				<img src={qzome1} alt="" />
				<img src={qzome2} alt="" />
				<img src={qzome3} alt="" />
			</div>
		</div>
	);
};

export default QZone;
