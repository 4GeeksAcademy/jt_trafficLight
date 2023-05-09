import React, {useState} from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [ color, setColor] = useState("")

	return (
		<div clasName="container-fluid">
		<div className="row my-5">
      		<div className="col-sm-12">
          		<div className="alert alert-success text-center" role="alert">
            	<h2>This is a conventional traffic light</h2>
          		</div>
        	</div>
		</div>
		
		<div className="row my-5">
			<div className="col-sm-12 d-flex justify-content-center">
				<div className="cuerpo">
					<div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow" : "")}></div>
					<div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow" : "")}> </div>
					<div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow" : "")}></div>
				</div>
			</div>
		</div>
		<div className="col-sm-12 d-flex justify-content-center">
		<button type="button" className="btn btn-success">Go crazy!</button>
		</div>
		<div className="row my-5">
			<div className="fixed-bottom p-4 text-danger text-center">
        		Made with ❤️ by <b>Julia</b>
      		</div>
		</div>
		</div>
	);
};

export default Home;
