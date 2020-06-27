import React from "react";
import { render } from "react-dom";
import App from "./src/app";

render(
	<div>
		<App />
		<style jsx global>{`
			* {
				font-family: sans-serif;
				box-sizing: border-box;
			}
			html,
			body,
			body > div:first-child,
			#root,
			#root > div,
			#root > div > div {
				height: 100%;
			}
			body {
				margin: 0;
				padding: 0;
			}
		`}</style>
	</div>,
	document.querySelector("#root")
);
