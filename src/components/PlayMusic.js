import React, { useEffect } from "react";

export default function PlayMusic(props) {
	useEffect(() => {
		props.music.play();
		return () => {
			props.music.pause();
		};
	}, []);
	return <></>;
}
