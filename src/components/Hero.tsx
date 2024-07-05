import Navbar from "../components/Navbar"
const Hero = () => {
    return (
        <header>
            <Navbar />
            <div className="hero-grid">
                <div className="hero-text">
                    <h1>Nice to meet you!</h1>
                    <h2></h2>
                    <p>I'm a Web Developer.</p>
                    <p>Passionate about creating beautiful and accessible websites. </p>
                    <p>I'm free for interesting projects.</p>
                    <a href="#contact">Get in touch</a>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image">
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Hero