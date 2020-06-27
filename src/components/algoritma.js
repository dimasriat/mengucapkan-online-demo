import React, { useState, useEffect } from "react";
import screen from "./screen";

export default function Algoritma(props) {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			if (index < 14) {
				setIndex((i) => i + 1);
			} else {
				props.setStep(2);
			}
		}, 1000);
	}, [index]);
	return (
		<div className="window">
			<div
				className="frame"
				onClick={() => index == 14 && setIndex(0)}
			></div>
			<style jsx>{`
				.window {
					padding: 1rem 0.5rem 0.5rem;
					${
						props.step > 1 &&
						`background-color: white;
					border: 1px solid black;`
					}
				}
				.frame {
					width: 491px;
					height: 316px;
					background-color: rgb(30,30,30);
					background-image: url("${screen[index]}");
					background-size: cover;
					background-position: center;
				}
			`}</style>
		</div>
	);
}
