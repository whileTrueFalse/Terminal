import React from "react"
import Typewriter from "typewriter-effect"
import { navigate } from "gatsby-link"
import "../styles/contact.scss"
import Sending from "./Sending"

export default function Contact({ close }) {
  const [state, setState] = React.useState({})
  const [messageSending, setMessageSending] = React.useState(false)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setMessageSending(true)
    const url = `/.netlify/functions/contact`
    fetch(url, {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then(response => {
        response.ok
          ? navigate("/success")
          : alert("An error occured while trying to send contact message!")
        setMessageSending(false)
      })
      .then(close)
  }

  return (
    <div className="contactContainer">
      <div style={{ margin: "auto", minWidth: "100%" }}>
        <h1 className="contactH1">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("Contact me")
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none"
                })
            }}
          />
        </h1>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/contact-us">
            <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required={true}
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required={true}
            placeholder="E-Mail address"
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required={true}
            placeholder="Your message"
            rows="3"
            onChange={handleChange}
          ></textarea>
          {messageSending ? (
            <button type="submit" disabled={messageSending}>
              <Sending />
            </button>
          ) : (
            <button type="submit" disabled={messageSending}>
              Send
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
