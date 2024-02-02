import { Link } from "react-router-dom"
import logo from '../../assets/logo.gif'
import logoStill from '../../assets/logoStill.png'
import { useTimer } from 'react-timer-hook';
import { useState, useEffect } from "react"
import { faGithub, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
    
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5);

    const seconds = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    const [GITURL, setGIF] = useState(logoStill)
    useEffect(() => {
        if (seconds.isRunning){
            setGIF(logo)
        } else {
            setGIF(logoStill)
        }
        seconds.isRunning ? logoStill : logo
    }, [seconds])
 

    return (
        <div>
            <div className="logoContainer">
                <img className="logoCrop" src={GITURL} alt="loading..." />
                <div className="logoButtonContainer">
                    <button className="logoButton"> by Tara Laughlin</button>
                    <Link to="https://github.com/slimtimtamTara">
                        <FontAwesomeIcon icon={faGithub}/> 
                    </Link>
                    <Link to="https://www.linkedin.com/in/tara-laughlin-08/">
                        <FontAwesomeIcon icon={faLinkedin} /> 
                    </Link>
                    <Link to="https://www.linkedin.com/in/tara-laughlin-08/">
                        <FontAwesomeIcon icon={faInstagramSquare} /> 
                    </Link>
                </div>           
                </div>
            <div className="aboutContainer">
            <div className="greetingHeader"> Hey, </div>
                <div className="greetingSubheader"> GET TO KNOW A LITTLE ABOUT ME </div>
                <div className="greetingContent">
                    <Link to="/about">Who am I</Link>
                    <div > My experience</div>
                    <div>and</div>
                    <Link to="/projects">stuff I've worked on</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Home