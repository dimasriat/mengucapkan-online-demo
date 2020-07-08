function draw(raw) {
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
		return { when, text, style };
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
		const [time, background, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, background, style };
	});
	/**
	 * parsing the MUSIC property
	 */
	DrawObject["MUSIC"] = DrawObject["MUSIC"].map((item) => {
		const [time, music] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, music };
	});

	DrawObject["ANIMATION"] = DrawObject["ANIMATION"].map(item => item.trim()).join('');

	DrawObject["PAUSE_BREAK"] = DrawObject["FOCUS"]
		.filter((item) => item.type === "button")
		.map((item) => item.when[0]);
	/**
	 * returning the function with object
	 */
	return DrawObject;
}
const [kado, bgGrid, ilysm, cloud] = ["kado.jpg", "bg.jpg", "ilysm.mp3", 'cloud.jpg'];
const test = draw(`

SUBTITLE
1-3 __ dim
4-5 __ jadi gini, __ color: black;
7-9 __ sebenernya nih ya __ color: black;
9-10 __ aku tuh
12-15 __ udah lama suka sama kamuuu :(

FOCUS
6-8 __ text __ now playing - rehat (kunto aji)
10-14 __ picture __ ${kado}
13-14 __ button __ bangettt asu ngopo mandeg
15-17 __ text __ HALOOO DIMMMM __ font-size: 3rem; color: red;
17-19 __ text __ cokk keren
19-25 __ text __ HALOOO DIMMMM __ font-size: 1rem; color: yellow; font-style: italic;
20-25 __ text __ HALOOO DIMMMM __ font-size: 1rem; color: yellow; font-style: italic;
21-25 __ text __ HALOOO DIMMMM __ font-size: 1rem; color: yellow; font-style: italic;
22-25 __ text __ HALOOO DIMMMM __ font-size: 1rem; color: yellow; font-style: italic;

BG
3-10 __ ${bgGrid}
11-14 __ . __ background-color: cyan;
15-3600 __ ${cloud} __ animation: bg1 24s linear infinite;

MUSIC
15-3600 __ ${ilysm}

ANIMATION
@keyframes bg1 {
	0% {
		background-position-x: 0;
	}
	100% {
		background-position-x: 750px;
	}
}
@keyframes bg1 {
	0% {
		background-position-x: 0;
	}
	100% {
		background-position-x: 750px;
	}
}

`);
console.log(JSON.stringify(test, null, 2));
