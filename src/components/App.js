import React, { useState, useEffect } from "react";

import Subtitle from "./Subtitle";
import Focus from "./Focus";
import Step from "./Step";
import Item from "./Item";
import BgImage from "./BgImage";
import Text from "./Text";
import PlayMusic from "./PlayMusic";

export default function App(props) {
	const { Draw } = props;

	const [step, setStep] = useState(0);
	useEffect(() => {
		if (Draw["PAUSE_BREAK"].includes(step)) return;
		setTimeout(() => {
			setStep((s) => s + 1);
		}, 1000);
	}, [step]);

	const [music] = useState(
		Draw["MUSIC"].map((item) => new Audio(item.music))
	);

	return (
		<>
			{/* FOCUS AREA */}
			<Focus>
				{Draw["FOCUS"].map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<Item {...item} setStep={setStep} />
					</Step>
				))}
			</Focus>

			{/* SUBTITLE AREA */}
			<Subtitle>
				{Draw["SUBTITLE"].map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<Text {...item} />
					</Step>
				))}
			</Subtitle>

			{/* BACKGROUND HANDLER */}
			{Draw["BG"].map((item, index) => (
				<Step key={index} step={step} when={item.when}>
					<BgImage src={item.background} style={item.style} />
				</Step>
			))}

			{/**
			 * MUSIC HANDLER
			 * but the music has been loaded in this components (App.js)
			 */}
			{Draw["MUSIC"].map((item, index) => (
				<Step key={index} step={step} when={item.when}>
					<PlayMusic music={music[index]} />
				</Step>
			))}
		</>
	);
}
