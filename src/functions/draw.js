export default function draw(raw) {
	let DrawObject = {};

	raw.trim()
		.split("\n\n")
		.forEach((group) => {
			const item = group.split("\n");
			const [type] = item;
			DrawObject[type] = [...item.filter((str) => str != type)];
		});

	/**
	 * parsing the SUBTITLE property
	 */
	DrawObject["SUBTITLE"] = DrawObject["SUBTITLE"].map((item) => {
		const [time, text, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, text, style};
	});
	/**
	 * parsing the FOCUS property
	 */
	DrawObject["FOCUS"] = DrawObject["FOCUS"].map((item) => {
		const [time, type, asset, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, type, asset, style };
	});
	/**
	 * parsing the BG property
	 */
	DrawObject["BG"] = DrawObject["BG"].map((item) => {
		const [time, background] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, background };
	});
	/**
	 * parsing the MUSIC property
	 */
	DrawObject["MUSIC"] = DrawObject["MUSIC"].map((item) => {
		const [time, music] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, music };
	});
	/**
	 * returning the function with object
	 */
	return DrawObject;
}

