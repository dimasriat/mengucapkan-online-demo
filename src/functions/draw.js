export default function drawGenerate(raw) {
	let DrawObject = {};

	raw.trim()
		.split("\n\n")
		.forEach((group) => {
			const item = group.split("\n");
			const [type] = item;
			DrawObject[type] = [...item.filter((str) => str != type)];
		});

	DrawObject["SUBTITLE"] = DrawObject["SUBTITLE"].map((item) => {
		const [time, text, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, text, style };
	});
	
	DrawObject["FOCUS"] = DrawObject["FOCUS"].map((item) => {
		const [time, type, asset, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, type, asset, style };
	});
	
	DrawObject["BG"] = DrawObject["BG"].map((item) => {
		const [time, background, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, background, style };
	});
	
	DrawObject["MUSIC"] = DrawObject["MUSIC"].map((item) => {
		const [time, music] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, music };
	});

	// DrawObject["ANIMATION"] = DrawObject["ANIMATION"].map(item => item.trim()).join('');

	DrawObject["PAUSE_BREAK"] = DrawObject["FOCUS"]
		.filter((item) => item.type === "button")
		.map((item) => item.when[0]);
	/**
	 * returning the function with object
	 */
	return DrawObject;
}