import { useEffect, useRef } from "react";
import styles from "../styles/piano-tiles.module.css";
function Row({ num, setScore }) {
	const cols = [1, 2, 3, 4, 5];

	const rowRef = useRef();
	const counter = useRef(1);

	useEffect(() => {
		function animate() {
			// yOffsetRef.current -= 2;
			counter.current += 1;
			rowRef.current.style.animationIterationCount = counter;

			requestAnimationFrame(animate);
		}

		animate();
	}, []);

	return (
		<div ref={rowRef} className={` row ${styles.row}`}>
			{cols.map((_, i) => {
				const target = num === i + 1;
				return (
					<div
						key={i}
						className={`${styles.tile} ${target ? styles.target : null}`}
						onClick={() => {
							target ? setScore((current) => current + 1) : null;
						}}
					/>
				);
			})}
		</div>
	);
}

export default Row;
