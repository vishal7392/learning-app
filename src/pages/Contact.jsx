import Button from '../components/Button'

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="page">
      <p className="eyebrow">Contact</p>
      <h1>Get in touch</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />

        <Button type="submit">Send message</Button>
      </form>
    </section>
  )
}

export default Contact
