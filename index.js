import React from "react";
import { render } from "react-dom";
import App from "./src/app";

render(
	<>
		<App />
		<style jsx global>{`
			* {
				font-family: sans-serif;
				box-sizing: border-box;
			}
			body {
				background-color: blue;
				margin: 0;
				padding: 0;
			}
		`}</style>
	</>,
	document.getElementById("root")
);
