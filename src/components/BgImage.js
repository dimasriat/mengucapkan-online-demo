import React from "react";

export default function BgImage(props) {
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