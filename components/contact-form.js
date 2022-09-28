import { useRef, useState } from "react";

export default function ContactForm() {
    const ref = useRef();

    const [status, setStatus] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendMail = async (e) => {
        e.preventDefault();
        setStatus(false);

        const data = {
            name,
            email,
            message,
        };

        try {
            // Send the email
            await fetch("/api/contact", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            });

            // Show the confirmation message
            setStatus(true);

            // Reset the form
            ref.current.reset();
        } catch (error) {
            window.alert("There was an error sending your message. Please try again.");
        }
    };

    return (
        <form role="form" method="post" onSubmit={sendMail} ref={ref}>
            {status && (
                <p>
                    <strong>Thanks for contacting us! We&rsquo;ll get back to you shortly.</strong>
                </p>
            )}
            <div className="form-group mb-15">
                <label htmlFor="fullname">Your Name</label>
                <input required type="text" className="form-control" id="fullname" name="fullname" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group mb-15">
                <label htmlFor="email">Your Email</label>
                <input required type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-15">
                <label htmlFor="message">Your Message</label>
                <textarea required className="form-control" id="message" name="message" rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="form-group mb-15">
                <button type="submit" className="btn btn-default">
                    Submit
                </button>
            </div>
        </form>
    );
}
