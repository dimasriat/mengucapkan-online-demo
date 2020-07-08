import React, { useState, useEffect } from "react";

import Subtitle from "./Subtitle";
import Focus from "./Focus";
import Step from "./Step";
import Item from "./Item";

import draw from "../../clients/test/text";

const pauseBreaks = draw["FOCUS"]
	.filter((item) => item.type === "button")
	.map((item) => item.when[0]);

function BgImage(props) {
	const { src } = props;
	return (
		<>
			<style jsx global>{`
				#root {
					${src !== "" ? `background-image: url('${src}')` : ""}
				}
			`}</style>
		</>
	);
}

function Text(props) {
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

export default function App(props) {
	const [step, setStep] = useState(0);

	useEffect(() => {
		if (pauseBreaks.includes(step)) return;
		setTimeout(() => {
			setStep((s) => s + 1);
		}, 1000);
	}, [step]);

	return (
		<>
			{/* FOCUS AREA */}
			<Focus>
				{draw["FOCUS"].map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<Item {...item} setStep={setStep} />
					</Step>
				))}
			</Focus>

			{/* SUBTITLE AREA */}
			<Subtitle>
				{draw["SUBTITLE"].map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<Text {...item} />
					</Step>
				))}
			</Subtitle>
			
			{/* BACKGROUND HANDLER */}
			{draw["BG"].map((item, index) => (
				<Step key={index} step={step} when={item.when}>
					<BgImage src={item.background} />
				</Step>
			))}
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
					background-color: black;
					color: white;
				}
				#root {
					padding: 0 0.5rem;
				}
			`}</style>
		</>
	);
}
