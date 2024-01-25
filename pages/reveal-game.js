import RevealImage from "@/components/RevealImage";
import { RevealGameAnswers } from "@/utils/content";
import { useState } from "react";
function RevealGame() {
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState(0);
  return (
    <>
      <div>
        <h1>Reveal Game</h1>
        <h2>Score: {score}</h2>
        {RevealGameAnswers.map((_, i) => {
          return (
            <RevealImage
              key={i}
              position={i}
              setScore={setScore}
              turn={turn}
              setTurn={setTurn}
            />
          );
        })}
        {/* <RevealImage
        key={0}
        position={0}
        setScore={setScore}
        turn={turn}
        setTurn={setTurn}
      /> */}
      </div>
    </>
  );
}

export default RevealGame;
