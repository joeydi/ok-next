import mail from "@sendgrid/mail";

mail.setApiKey(process.env.EMAIL_API_KEY);

export default async function Contact(req, res) {
    const { name, email, message } = req.body;

    const msg = {
        to: "joeydi@okaypl.us",
        from: `${name} <${email}>`,
        subject: "New message from Okay Plus contact form.",
        text: `
Name: ${name}
Email: ${email}

Message: ${message}
        `,
    };

    try {
        await mail.send(msg);
        return res.json({ message: `Email has been sent` });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            code: error.code,
            message: error.message,
        });
    }
}
