import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import SignIn from './SignIn';

function Home() {
    const [isFilpped, setIsFlipped] = useState(false)
    const changeForm = () => {
        console.log("flipped");
        setIsFlipped(!isFilpped)
    }
    return (
        <div className="home">
            <ReactCardFlip isFlipped={isFilpped} flipDirection="horizontal">
                <div className="signIn">
                    <SignIn signup={changeForm} />
                </div>
                <div className="signUp">
                    {/* <button value="submit" text="submit" onClick={() => changeForm()}></button>

                    SignUp */}
                    <SignIn signup={changeForm} />

                </div>
            </ReactCardFlip>
        </div>
    )
}

export default Home
