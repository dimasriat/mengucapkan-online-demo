import React from "react";

export default function CenterItem(props) {
	return (
		<div className="container">
			{props.children}
			<style jsx>{`
				.container {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				}
			`}</style>
		</div>
	);
}
