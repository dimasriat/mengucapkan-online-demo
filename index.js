import React from "react";
import { render } from "react-dom";
import App from "./src/app";

function Root() {
	return (
		<>
			<App />
			<style jsx global>{`
				* {
					font-family: sans-serif;
					box-sizing: border-box;
				}
				html,
				body,
				#root {
					width: 100%;
					height: 100%;
					margin: 0;
					padding: 0;
					background-color: aqua;
				}
				#root {
					padding: 0 0.5rem;
				}
			`}</style>
		</>
	);
}

render(<Root />, document.querySelector("#root"));
