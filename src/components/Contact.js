function Contact() {
  return (
    <main className="contact" id="contact">
      <a className="anchor" id="contact_"></a>
      <h2>{"What's Next?"}</h2>
      <h3>Get in Touch</h3>
      <p>
        {
          " I'm currently open to new opportunities, my inbox is always open. Weather you have a question or just want to say hi, I'll do my best to get back to you."
        }
      </p>
      <a
        className="button"
        href="mailto:mrrafaelmendes@gmail.com"
        style={{ color: "var(--primary)" }}
      >
        Say Hello
      </a>
    </main>
  );
}

export default Contact;
