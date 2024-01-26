import { useEffect, useState } from "react";
import styles from "../styles/snap.module.css";

function Snap() {
	const [score, setScore] = useState(0);
	const [image1, setImage1] = useState(`${Math.ceil(Math.random() * 5)}.jpg`);
	const [image2, setImage2] = useState(`${Math.ceil(Math.random() * 5)}.jpg`);
	let snapInterval;

	const handleClick = () => {
		if (image1 == image2) {
			setScore(score + 1);
			setImage1(`${Math.ceil(Math.random() * 5)}.jpg`);
			setImage2(`${Math.ceil(Math.random() * 5)}.jpg`);
		}
	};

	useEffect(() => {
		let num1, num2;
		console.log({ image1, image2 });

		snapInterval = setInterval(() => {
			num1 = Math.ceil(Math.random() * 5);
			num2 = Math.ceil(Math.random() * 5);
			setImage1(`${num1}.jpg`);
			setImage2(`${num2}.jpg`);
		}, 3000);

		return () => {
			clearInterval(snapInterval);
		};
	}, []);
	return (
		<>
			<h2>Score: {score}</h2>
			<div className={styles.imageContainer}>
				<img src={image1} />
				<img src={image2} />
			</div>
			<button onClick={handleClick}>Snap!</button>
		</>
	);
}

export default Snap;
