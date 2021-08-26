import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const data = {
	image: "https://i.pinimg.com/736x/08/a9/b8/08a9b8cc805a1b6a7037819719ab2427.jpg",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia",
	},
};

const content = (
	<div className="card m-5">
		<img alt="Card image cap" className="card-img-top" src="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/" />
		<div className="card-body">
			<h5 className="card-title">{data.cardTitle}</h5>
			<p className="card-text">{data.cardDescription}</p>
			<a className="btn btn-primary" href="https://en.wikipedia.org/wiki/Bob_Dylan">
				{data.button.label}
			</a>
		</div>
	</div>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
