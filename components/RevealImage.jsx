import { RevealGameAnswers } from "@/utils/content";
import { useEffect, useRef, useState } from "react";
import styles from '../styles/reveal-image.module.css'

function RevealImage({ position, setScore, turn, setTurn }) {
    const { image, answer } = RevealGameAnswers[position]
    const [guess, setGuess] = useState('')
    const [visible, setVisible] = useState(true)
    const [correct, setCorrect] = useState(false)
    const imageRef = useRef()

    let blur = 5

    const handleGuess = (e) => {
        e.preventDefault()
        if (guess.toLowerCase() === answer) {
            setScore((current) => { return current += 1 })
            setGuess('')
            setCorrect(true)
        } else {
            setGuess('')
        }
    }
    useEffect(() => {
        let animationId;

        const animateBlur = () => {
            if (blur > 0 && correct === false) {
                blur -= 0.01;
                imageRef.current.style.filter = `blur(${Math.max(0, blur)}rem)`;
                animationId = requestAnimationFrame(animateBlur);
            } else {
                imageRef.current.style.filter = `blur(0rem)`;
                setTimeout(() => {
                    setVisible(false);
                    setTurn(position + 1)
                }, 3000)

            }
        };
        if (position === turn) {
            animateBlur();
        }


        // Cleanup: cancel the animation frame when the component unmounts
        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [blur, turn, correct]);


    return (
        <>
            {visible
                ? <div className={styles.imageContainer} style={{ zIndex: turn === position ? 1 : -1 }}>
                    <img ref={imageRef} src={`/reveal-images/${image}`} />
                    {correct ? <p>Correct!</p> : <form onSubmit={handleGuess}>
                        <input value={guess} onChange={(e) => { setGuess(e.target.value) }}></input>
                        <button type="submit">Guess</button>
                    </form>}
                </div>
                : null
            }

        </>
    );
}

export default RevealImage;