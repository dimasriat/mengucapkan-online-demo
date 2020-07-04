import React, { useState, useEffect } from "react";
import Icon from "./icon";
import Subtitle from "./subtitle";
import bg from "../assets/images/bg.jpg";

function Center(props) {
	return (
		<div className="container">
			<Icon {...props} />
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					color: white;
				}
			`}</style>
		</div>
	);
}

export default function App(props) {
	const [step, setStep] = useState(0);
	const [pause, setPause] = useState(false);
	useEffect(() => {
		console.log(step);
		if (!pause) {
			setTimeout(() => {
				if (step == 10) return setPause((s) => true);
				if (step == 20) return setPause((s) => true);
				if (step == 54) return setPause((s) => true);
				setStep((s) => s + 1);
			}, 3000);
		}
	}, [step]);
	return (
		<div className="container">
			<Center
				step={step}
				setStep={setStep}
				pause={pause}
				setPause={setPause}
			/>
			<Subtitle step={step} />
			<style jsx>{`
				.container {
					width: 100%;
					height: 100%;
					background-color: black;
					background-image: ${step >= 27 ? `url('${bg}')` : "none"};
					animation: bg-move 20s infinite linear;
				}

				@keyframes bg-move {
					0% {
						background-position-y: 0px;
					}
					100% {
						background-position-y: 500px;
					}
				}
			`}</style>
			<style jsx global>{`
				* {
					font-family: sans-serif;
					box-sizing: border-box;
				}
				html {
					width: 100%;
					height: 100%;
					margin: 0;
					padding: 0;
				}
				body,
				#root {
					width: 100%;
					height: 100%;
					margin: 0;
					padding: 0;
				}
			`}</style>
		</div>
	);
}
