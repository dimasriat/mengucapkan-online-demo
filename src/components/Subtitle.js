import React from "react";

export default function Subtitle(props) {
	return (
		<div className="container">
			{props.children}
			<style jsx>{`
				.container {
					position: fixed;
					bottom: 0;
					width: 100%;
					text-align: center;
					padding: 1rem 0;
					font-size: 1.5rem;
				}
			`}</style>
		</div>
	);
}