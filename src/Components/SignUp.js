import { Lock, Person, Visibility, VisibilityOff } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp({ signup }) {
    const [isVisible, setIsVisible] = useState(false)
    const handleVisibility = () => {
        console.log("visible");
        setIsVisible(!isVisible)
    }
    return (
        <div className="signInComponent">
            <h1>SignUp Form</h1>
            <div className="signIn__Input"><Person /><input type="text" placeholder="Username"></input></div>
            <div className="signIn__Input"><Lock /><input type={!isVisible ? "password" : "text"} placeholder="Password"></input>{isVisible ? <Visibility onClick={() => handleVisibility()} /> : <VisibilityOff onClick={() => handleVisibility()} />}</div>
            {/* <button type="submit">Submit</button> */}
            <h2 onClick={() => signup()}>Click Here for Sign Up</h2>
            <Link to="/dashboard">
                <button type="submit" text="submit">
                    Submit
                </button>
            </Link>
        </div>
    )
}

export default SignUp
