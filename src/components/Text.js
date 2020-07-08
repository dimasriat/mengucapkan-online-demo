import React from "react";

export default function Text(props) {
	const style = props.style ? props.style : "";
	return (
		<div className="container">
			{props.text}
			<style jsx>{`
				.container {
					${style}
				}
			`}</style>
		</div>
	);
}
