import draw from "../../src/functions/draw";

import kado from "./kado.jpg";
import bgGrid from "./bg.jpg";
const rehat = "rehat.mp3";

export default draw(`

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
15-17 __ text __ HBD DIMMMM __ font-size: 3rem; color: red;
17-19 __ text __ cokk keren
19-25 __ text __ HBD DIMMMM __ font-size: 1rem; color: yellow; font-style: italic;
20-25 __ text __ HBD DIMMMM __ font-size: 1rem; color: yellow; font-style: italic;
21-25 __ text __ HBD DIMMMM __ font-size: 1rem; color: yellow; font-style: italic;
22-25 __ text __ HBD DIMMMM __ font-size: 1rem; color: yellow; font-style: italic;

BG
3-10 __ ${bgGrid}

MUSIC
6-3600 __ ${rehat}

CREDIT
dimas
bunga
uzy
gesti

`);


// const preview = {
// 	SUBTITLE: [
// 		{
// 			when: [1, 3],
// 			text: "dim",
// 		},
// 		{
// 			when: [3, 5],
// 			text: "jadi gini,",
// 		},
// 		{
// 			when: [5, 7],
// 			text: "sebenernya nih ya",
// 		},
// 		{
// 			when: [7, 8],
// 			text: "aku tuh",
// 		},
// 		{
// 			when: [10, 15],
// 			text: "udah lama suka sama kamuuu :(",
// 		},
// 	],
// 	FOCUS: [
// 		{
// 			when: [10, 14],
// 			type: "picture",
// 			asset: "kado.jpg",
// 		},
// 		{
// 			when: [13, 14],
// 			type: "button",
// 			asset: "bangettt asu ngopo mandeg",
// 		},
// 		{
// 			when: [15, 17],
// 			type: "text",
// 			asset: "HBD DIMMMM",
// 			style: "font-size: 3rem; color: red;",
// 		},
// 		{
// 			when: [17, 19],
// 			type: "text",
// 			asset: "cokk keren",
// 		},
// 		{
// 			when: [19, 22],
// 			type: "text",
// 			asset: "HBD DIMMMM",
// 			style: "font-size: 1rem; color: yellow; font-style: italic;",
// 		},
// 	],
// 	BG: [
// 		{
// 			when: [3, 4],
// 			background: "bg.jpg",
// 		},
// 	],
// 	MUSIC: [
// 		{
// 			when: [3, 3600],
// 			music: "rehat.mp3",
// 		},
// 	],
// 	CREDIT: ["dimas", "bunga", "uzy", "gesti"],
// };

