import RevealImage from "@/components/RevealImage";
import { RevealGameAnswers } from "@/utils/content";
import { useState } from "react";
function RevealGame() {
  const [score, setScore] = useState(0);
  return (
    <>
      <h1>Reveal Game</h1>
      <h2>Score: {score}</h2>
      {RevealGameAnswers.map((_, i) => {
        return <RevealImage position={i} setScore={setScore} />;
      })}
    </>
  );
}

export default RevealGame;
