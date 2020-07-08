import React from "react";

export default function Item(props) {
	if (props.type === "picture") {
		return (
			<div className="container">
				<img src={props.asset} />
				<style jsx>{`
					.container {
						background-color: white;
						border: 1px solid black;
						padding: 0.5rem 0.5rem 2rem;
						box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
					}
					img {
						border: 1px solid black;
					}
				`}</style>
			</div>
		);
	}
	if (props.type === "button") {
		return (
			<button onClick={() => props.setStep((s) => s + 1)}>
				{props.asset}
				<style jsx>{`
					button {
						margin-top: 1rem;
					}
				`}</style>
			</button>
		);
	}
	if (props.type === "text") {
		const style = props.style ? props.style : "";
		return (
			<div className="container">
				{props.asset}
				<style jsx>{`
					.container {
						${style}
					}
				`}</style>
			</div>
		);
	}

	return <></>;
}
