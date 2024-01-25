import styles from '../styles/piano-tiles.module.css'
function Row({ num }) {

    const cols = [1, 2, 3, 4, 5]


    return (<div className={styles.row}>
        {cols.map((_, i) => {
            return <div key={i} className={`${styles.tile} ${num === i + 1 ? styles.target : null}`} />
        })}
    </div>);
}

export default Row;