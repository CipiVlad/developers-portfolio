const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-flex">
                <div className="contact-text">
                    <h2>Get in touch</h2>
                    <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.Feel free to contact me.</p>
                </div>
                <div className="contact-form">
                    <form method="POST">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder=" name..." />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder=" email..." />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder=" message..." />
                        </div>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact