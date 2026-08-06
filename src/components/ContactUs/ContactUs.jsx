import { useState } from "react";
import Button from "../Button/Button";
import styles from "./ContactUs.module.css";

function ContactUs({
  heading = "Contact Us",
  description = "Have a question or feedback? We'd love to hear from you.",
  recipientEmail = "nohaniho88@gmail.com",
  buttonText = "Send Message",
  successMessage = "Thank you! Your email client should open with your message ready to send.",
  fieldLabels = {
    name: "Your Name",
    email: "Your Email",
    subject: "Subject",
    message: "Message",
  },
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const body = `From: ${formData.name} (${formData.email})\n\n${formData.message}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      {submitted ? (
        <p className={styles.success}>{successMessage}</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label htmlFor="contact-name">{fieldLabels.name}</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="contact-email">{fieldLabels.email}</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="contact-subject">{fieldLabels.subject}</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="contact-message">{fieldLabels.message}</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="active" htmlType="submit">{buttonText}</Button>
        </form>
      )}
    </section>
  );
}

export default ContactUs;
