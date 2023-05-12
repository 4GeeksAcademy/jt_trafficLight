import React, {useState} from "react";

//create your first component
const Home = () => {

	const [color, setColor] = useState("")
	const [crazyColorOne, setCrazyColorOne] = useState(null);
	const [crazyColorTwo, setCrazyColorTwo] = useState(null);
	const [crazyColorThree, setCrazyColorThree] = useState(null);

	const changeColorOne = () => {
		const colorOne = ["blue", "purple", "orange"];
		const randomIndex = Math.floor(Math.random() * colorOne.length);
		setCrazyColorOne(colorOne[randomIndex]);
	  };

	  const changeColorTwo = () => {
		const colorTwo = ["pink", "lightgreen", "lightseagreen"];
		const randomIndex = Math.floor(Math.random() * colorTwo.length);
		setCrazyColorTwo(colorTwo[randomIndex]);
	  };

	  const changeColorThree = () => {
		const colorThree = ["tomato", "salmon", "greenyellow"];
		const randomIndex = Math.floor(Math.random() * colorThree.length);
		setCrazyColorThree(colorThree[randomIndex]);
	  };

	  const [title, setTitle] = useState("This is a conventional traffic light");
	  const changeTitle = () => {
		setTitle("This is NOT a conventional traffic light")
	  } 


	return (
		<div clasName="container-fluid">
		<div className="row my-5">
      		<div className="col-sm-12">
          		<div className="alert alert-success text-center" role="alert">
            	<h2>{title}</h2>
          		</div>
        	</div>
		</div>
		
		<div className="row my-5">
			<div className="col-sm-12 d-flex justify-content-center">
				<div className="cuerpo">
					<div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow" : "") + (crazyColorOne !== null ? ` ${crazyColorOne}` : "")}></div>
					<div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow" : "") + (crazyColorTwo !== null ? ` ${crazyColorTwo}` : "")}> </div>
					<div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow" : "") + (crazyColorThree !== null ? ` ${crazyColorThree}` : "")}></div>
				</div>
			</div>
		</div>
		<div className="col-sm-12 d-flex justify-content-center my-3">
		<button type="button" className="btn btn-success" onClick={() => {changeColorOne(); changeColorTwo(); changeColorThree(); changeTitle()}}>Go crazy!</button>
		</div>

		<div className="col-sm-12 d-flex justify-content-center">
		<button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 		Instructions
		</button>

			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Instrucciones</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Pincha el botón "Go Crazy" para activar luces locas en el semáforo. Activa cada luz haciendo click en ella.
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="col-sm-12 d-flex justify-content-center">
		<button type="button" className="btn btn-danger my-3 " onClick={() => window.location.reload()}>Reset!</button>
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
