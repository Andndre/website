import { useState } from 'react';

export default function App() {
	const [rows, setRows] = useState([
		{ nama: '', bobot: 0, nilai: 0, nilaiMaksimal: 0 },
	]);
	const [error, setError] = useState('');
	const [_updater, setUpdater] = useState(0);
	const [result, setResult] = useState(null);
	const [bobotSum, setBobotSum] = useState(100);
	const handleAddRow = () => {
		setRows((prev) => [
			...prev,
			{ nama: '', bobot: 0, nilai: 0, nilaiMaksimal: 0 },
		]);
	};
	const getResult = () => {
		setError('');
		let res = 0;
		let bobotSum = 0;
		for (const row of rows) {
			if (row.nama === '') {
				setError('Isi semua field');
				return;
			}
			if (row.bobot === 0) {
				setError('Bobot tidak mungkin bernilai 0');
				return;
			}
			if (row.nilaiMaksimal === 0) {
				setError('Nilai maksimal tidak mungkin bernilai 0');
				return;
			}
			bobotSum += row.bobot;
			res += (row.bobot * row.nilai) / row.nilaiMaksimal;
		}
		setBobotSum(bobotSum);
		setResult(res);
	};
	const kolom = ['Nama', 'Bobot', 'Nilai Maksimal', 'Nilai', 'Aksi'];
	return (
		<div className="hitung-nilai-tugas-akhir">
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<table>
				<tbody>
					<tr>
						{kolom.map((kol, i) => {
							return <th key={'th-' + i}>{kol}</th>;
						})}
					</tr>
					{rows.map((row, i) => {
						return (
							<tr key={'table-row-' + i}>
								<td>
									<input
										onChange={(e) => {
											rows[i].nama = e.target.value;
											setUpdater((prev) => prev + 1);
										}}
										type="text"
										placeholder="Nama"
										value={row.nama}
									/>
								</td>
								<td>
									<input
										onChange={(e) => {
											const curr = parseFloat(e.target.value);
											if (curr > 100) {
												return;
											}
											rows[i].bobot = curr;
											setUpdater((prev) => prev + 1);
										}}
										max={100}
										min={0}
										type="number"
										placeholder="Bobot (0-100)"
										value={row.bobot}
									/>
								</td>
								<td>
									<input
										onChange={(e) => {
											const curr = parseFloat(e.target.value);
											if (curr > 100) {
												return;
											}
											rows[i].nilaiMaksimal = curr;
											setUpdater((prev) => prev + 1);
										}}
										type="number"
										placeholder="Nilai Maksimal"
										value={row.nilaiMaksimal}
									/>
								</td>
								<td>
									<input
										onChange={(e) => {
											const curr = parseFloat(e.target.value);
											if (curr > 100 || curr > row.nilaiMaksimal) {
												return;
											}
											rows[i].nilai = curr;
											setUpdater((prev) => prev + 1);
										}}
										max={row.nilaiMaksimal}
										min={0}
										type="number"
										placeholder="Nilai"
										value={row.nilai}
									/>
								</td>
								<td>
									<button
										onClick={() => {
											rows.splice(i, 1);
											setUpdater((prev) => prev + 1);
										}}
										className="btn red"
									>
										Hapus
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<p>
				{result && (
					<strong>
						Nilai akhir anda (0-{bobotSum}): {result}
					</strong>
				)}
			</p>
			<button onClick={handleAddRow} className="btn">
				Tambah baris
			</button>
			<button onClick={getResult} className="btn">
				Hitung
			</button>
		</div>
	);
}
