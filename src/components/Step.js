import React from "react";

export default function Step(props) {
	const { step, when, children } = props;
	const [start, end] = when;
	return <>{start <= step && step < end && children}</>;
}
