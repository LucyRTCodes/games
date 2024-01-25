import { RevealGameAnswers } from "@/utils/content";
import { useRef, useState } from "react";

function RevealImage({ position, setScore }) {
    const { image, answer } = RevealGameAnswers[position]
    const [guess, setGuess] = useState('')
    const [visible, setVisible] = useState(true)
    const imageRef = useRef()

    let blur = position

    const handleGuess = (e) => {
        e.preventDefault()
        if (guess.toLowerCase() === answer) {
            setScore((current) => { return current += 1 })
        } else {
            setGuess('')
        }
    }

    requestAnimationFrame(() => {
        if (blur > 0) {
            blur -= 0.1
            imageRef.current.style.filter = `blur(${blur}rem)`
        } else {
            setVisible(false)
        }

    })
    return (
        <>
            {visible
                ? <div>
                    <img ref={imageRef} src={image} />
                    <form onSubmit={handleGuess}>
                        <input value={guess} onChange={(e) => { setGuess(e.target.value) }}></input>
                        <button type="submit">Guess</button>
                    </form>
                </div>
                : null
            }

        </>
    );
}

export default RevealImage;