import { Link } from "react-router-dom"
function Home() {
    return (
        <div className="aboutContainer">
            <div className="greetingHeader"> Hey, </div>
            <div className="greetingSubheader"> GET TO KNOW A LITTLE ABOUT ME </div>
            <div className="greetingContent">
                <Link to="/about">Who am I</Link>
                <div > My experience</div>
                <div> and stuff I've worked on</div>
            </div>
        </div>
    )
}

export default Home