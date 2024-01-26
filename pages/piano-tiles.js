import Row from "@/components/Row";
import styles from "../styles/piano-tiles.module.css";
import { useEffect, useRef, useState } from "react";

function PianoTiles() {
	const [score, setScore] = useState(0);
	const [components, setComponents] = useState([
		<Row num={2} setScore={setScore} />,
		<Row num={1} setScore={setScore} />,
		<Row num={4} setScore={setScore} />,
		<Row num={2} setScore={setScore} />,
		<Row num={3} setScore={setScore} />,
		<Row num={2} setScore={setScore} />,
		<Row num={1} setScore={setScore} />,
		<Row num={4} setScore={setScore} />,
		<Row num={2} setScore={setScore} />,
		<Row num={3} setScore={setScore} />,
	]);

	const gridRef = useRef();
	const yOffsetRef = useRef(0);

	const rowRefs = [];

	useEffect(() => {
		setInterval(() => {
			setComponents((current) => {
				return [
					<Row num={Math.ceil(Math.random() * 5)} setScore={setScore} />,
					...current.slice(0, current.length - 1),
				];
			});
		}, 1000);

		// function animate() {
		//   yOffsetRef.current -= 2;
		//   gridRef.current.style.bottom = yOffsetRef.current + "px";

		//   requestAnimationFrame(animate);
		// }

		// animate();
	}, []);
	return (
		<>
			<h2
				style={{
					background: "red",
					borderRadius: "10px",
					padding: "1rem 2rem",
					margin: "1rem",
				}}
			>
				Score: {score}
			</h2>
			<div className={styles.gridContainer}>
				<div ref={gridRef} className={styles.grid}>
					{components.map((component, i) => {
						return (
							<div key={i} className={styles.rowContainer}>
								{component}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default PianoTiles;
