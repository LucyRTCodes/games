import styles from "../styles/header.module.css";

function Header() {
	return (
		<>
			<div className={styles.header}>
				<nav>
					<a href="/">Home</a>
					<a href="/reveal-game">Reveal Game</a>
					<a href="/piano-tiles">Piano Tiles</a>
				</nav>
			</div>
		</>
	);
}

export default Header;
