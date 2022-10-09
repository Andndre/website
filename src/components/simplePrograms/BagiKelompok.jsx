import './BagiKelompok.css';
import { useRef, useState } from 'react';

//? https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

export default function App() {
	const form = useRef();
	const textArea = useRef();
	const jumlahKelompok = useRef();
	const [kelompok, setKelompok] = useState([]);
	const handleOnChange = (ev) => {
		jumlahKelompok.current.max = ev.currentTarget.value.split('\n').length;
	};
	const handleClick = () => {
		form.current.addEventListener('submit', (ev) => {
			ev.preventDefault();
		});
		let list = textArea.current.value.split('\n');
		const jmlKelompok = parseInt(jumlahKelompok.current.value);
		console.log(jmlKelompok);
		shuffle(list);
		shuffle(list);
		const kel = [];
		for (let i = 0; i < jmlKelompok; i++) {
			kel.push([]);
		}
		for (let i = 0; i < list.length; i++) {
			kel[i % jmlKelompok].push(list[i]);
		}
		setKelompok(kel);
	};
	return (
		<div className="bagi-kelompok">
			<p>Masukkan list anggota yang dipisahkan dengan baris baru (enter)</p>
			<form ref={form} className="card action">
				<div className="left">
					<label htmlFor="list-anggota">List</label>
					<textarea
						id="list-anggota"
						onChange={handleOnChange}
						required
						ref={textArea}
						cols="30"
						rows="10"
					></textarea>
				</div>
				<div className="right">
					<label htmlFor="jumlah-kelompok">Jumlah kelompok</label>
					<input
						id="jumlah-kelompok"
						ref={jumlahKelompok}
						required
						type="number"
						min={1}
						max={textArea.current?.value.split('\n').length ?? 0}
					/>
					<button type="submit" onClick={handleClick}>
						Generate
					</button>
				</div>
			</form>
			{kelompok &&
				kelompok.map((kel, i) => {
					return (
						<div>
							<h3>Kelompok {i + 1}</h3>
							<ol>
								{kel.map((anggota) => {
									return <li>{anggota}</li>;
								})}
							</ol>
						</div>
					);
				})}
		</div>
	);
}
