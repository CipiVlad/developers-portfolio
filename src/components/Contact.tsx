const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-text">
                <h2>Get in touch</h2>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible. Feel free to contact me.</p>
            </div >
            <div className="contact-mail">
                <a href="mailto:supercoder.cipi@gmail.com">write me!</a>

            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="530"
                height="129"
            // style={{
            //     position: "absolute",
            //     bottom: "0",
            //     left: "50%",
            //     transform: "translateX(-50%)"
            // }}
            >
                <g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25">
                    <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
                    <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
                    <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
                    <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
                    <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
                </g>
            </svg>
        </section >
    )
}
export default Contact