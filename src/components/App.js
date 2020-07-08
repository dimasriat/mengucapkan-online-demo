import React, { useState, useEffect, useRef } from "react";

import Subtitle from "./Subtitle";
import Focus from "./Focus";
import Step from "./Step";
import Item from "./Item";
import BgImage from "./BgImage";
import Text from "./Text";

import draw from "../../clients/";

// const music = draw["MUSIC"].map((item) => new Audio(item.music));

const pauseBreaks = draw["FOCUS"]
	.filter((item) => item.type === "button")
	.map((item) => item.when[0]);

function PlayMusic(props) {
	useEffect(() => {
		props.music.play();
		return () => {
			props.music.pause();
		};
	}, []);
	return <></>;
}

export default function App(props) {
	const [step, setStep] = useState(0);
	useEffect(() => {
		if (pauseBreaks.includes(step)) return;
		setTimeout(() => {
			setStep((s) => s + 1);
		}, 1000);
	}, [step]);

	const [music, setMusic] = useState(
		draw["MUSIC"].map((item) => new Audio(item.music))
	);

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

			{/**
			 * MUSIC HANDLER
			 * but the music has been loaded in this components (App.js)
			 */}
			{draw["MUSIC"].map((item, index) => (
				<Step key={index} step={step} when={item.when}>
					<PlayMusic music={music[index]} />
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
