import Row from "@/components/Row";
import styles from "../styles/piano-tiles.module.css";
import { useEffect, useRef, useState } from "react";

function PianoTiles() {
  const [components, setComponents] = useState([
    <Row num={2} />,
    <Row num={1} />,
    <Row num={4} />,
    <Row num={2} />,
    <Row num={3} />,
    <Row num={2} />,
    <Row num={1} />,
    <Row num={4} />,
    <Row num={2} />,
    <Row num={3} />,
  ]);

  const gridRef = useRef();
  const yOffsetRef = useRef(0);

  const rowRefs = [];

  useEffect(() => {
    setInterval(() => {
      setComponents((current) => {
        return [
          <Row num={Math.ceil(Math.random() * 5)} />,
          ...current.slice(0, current.length - 1),
        ];
      });
    }, 500);

    // function animate() {
    //   yOffsetRef.current -= 2;
    //   gridRef.current.style.bottom = yOffsetRef.current + "px";

    //   requestAnimationFrame(animate);
    // }

    // animate();
  }, []);
  return (
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
  );
}

export default PianoTiles;
