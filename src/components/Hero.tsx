import Navbar from "../components/Navbar"
const Hero = () => {
    return (
        <header>
            <Navbar />
            <div className="hero-grid">
                <div className="hero-text">
                    <h1>Nice to meet you!</h1>
                    <h2></h2>
                    <p>I'm Web Developer.</p>
                    <p>I'm passionate about creating beautiful and accessible websites. </p>
                    <p>I'm free for interesting projects.</p>
                    <a href="#contact">Get in touch</a>
                </div>
                <div className="hero-image">
                    <div className="hero-image-container">
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Hero