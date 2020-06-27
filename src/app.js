import React, { useState, useEffect } from "react";
import Algoritma from "./components/algoritma";
import bg from "../assets/images/bg.jpg";

export default function App(props) {
	const [step, setStep] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setStep(1);
		}, 3000);
	}, []);

	const app = [<h1>HBD ges</h1>, <Algoritma setStep={setStep} step={step} />, <Algoritma setStep={setStep} step={step} />];

	return (
		<div className="container">
			{app[step]}
			<style jsx>{`
				.container {
					background-color: rgb(30, 30, 30);
					background-image: ${step > 1 ? `url('${bg}')` : "none"};
					display: flex;
					justify-content: center;
					align-items: center;
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
		</div>
	);
}
