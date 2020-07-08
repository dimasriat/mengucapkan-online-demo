import React from "react";

export default function Item(props) {
	if (props.type === "picture") {
		return <img src={props.asset} />;
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
