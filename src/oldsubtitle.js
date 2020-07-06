import React from 'react'

export default function Subtitle(props) {
	const text = [
		"", // 0
		"halo Ges,👋",
		"aku punya sesuatu buat kamu 😁",
		"", // kado muncul
		"Tada!",
		"* krik krik *",
		"ini kado aku simpan",
		"spesial buat kamu hari ini",
		"soalnya ini kan hari spesialmu, kan?",
		"coba dibuka Ges kadonya",
		"", // 10
		"",
		"yhaaaa",
		"",
		"jadi ini itu kodinganmu",
		"yang kamu kirim ke aku Ges",
		"",
		"ternyata, bisa di run lhooo 😱",
		"beneran",
		"kalo nggak percaya coba aja",
		"", // 20
		"now playing - rehat (kunto aji)",
		"now playing - rehat (kunto aji)",
		"",
		"",
		"",
		"", //stay positive
		"",
		"",
		"Gesti Happy Birthday!",
		"makasih udah jadi temen yang baik", // 30
		"enak diajak sambat",
		"maaf kalo pernah salah ucap",
		"mungkin juga bikin kamu tersinggung",
		"",
		"oh iya,",
		"semangat menempuh perkuliahan",
		"di informatika uns",
		"",
		"kalo ada masalah cerita aja",
		"kalo butuh bantuan bilang aja", // 40
		"",
		"gws buat mba muuuu",
		"",
		"wes pokokmen keren dah kwe ges",
		"bisa kuat sampai sekarang",
		"walau banyak hal-hal yang kurang menyenangkan",
		"",
		"semangat imnidaaa",
		"",
		"maaf hadiahnya aneh gini", // 50
		"soalnya ini ide",
		'dari orang paling absurd sedunia :"D',
		"",
		"HBD Gesti,	cie udah 19 tahun", 
	];

	return (
		<>
			<p>{text[props.step]}</p>
			<style jsx>{`
				p {
					position: fixed;
					color: ${props.step >= 27 ? "black" : "white"};
					bottom: 0;
					width: 100%;
					font-size: 1.5rem;
					text-align: center;
				}
			`}</style>
		</>
	);
}