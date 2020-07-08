import React from "react";

export default function BgImage(props) {
	const { src, style } = props;
	return (
		<>
			<style jsx global>{`
				#root {
					${src !== "" && src !== "."
						? `background-image: url('${src}');`
						: ""}
					${style ? style : ""}
				}
			`}</style>
		</>
	);
}
