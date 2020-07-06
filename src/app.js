import React, { useState, useEffect } from "react";

import Subtitle from "./Subtitle";
import CenterItem from "./CenterItem";

import kado from "../assets/images/kado.jpg";

export default function App(props) {
	const [step, setStep] = useState(0);
	useEffect(() => {
		const iv = setInterval(() => {
			setStep((s) => s + 1);
		}, 1000);
		return () => clearInterval(iv);
	}, []);
	return (
		<>
			<CenterItem>
				<img src={kado} />
				<button>halooo</button>
			</CenterItem>
			<Subtitle>Aice Larasati {step}</Subtitle>
		</>
	);
}
