import React, {useState} from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [ selectedColor, setSelectedColor] = useState("green")

	return (
		<div className="text-center">

			<div className="top">
			</div>

			<div className="cuerpo">
				<div className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
				<div className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}> </div>
				<div className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
			</div>
			
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
