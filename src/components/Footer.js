import React from "react"
import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import Contact from "./Contact"
import { Link } from "gatsby"

const checkScreenWidthMobile = () => {
  if (typeof window !== `undefined`) {
    return window.screen.width < 1024 ? true : false
  }
}

const desktopButton = (
  <button
    className="popupWindowLinkButton"
    style={{ cursor: "pointer" }}
    onClick={() => {
      const win = new WinBox({
        title: "Contact me",
        width: "80%",
        height: "80%",
        x: "center",
        y: "center",
        onfocus: function () {
          this.removeClass("wb-no-focus")
          this.addClass("wb-focus")
        },
        onblur: function () {
          this.removeClass("wb-focus")
          this.addClass("wb-no-focus")
        },
      })

      ReactDOM.render(
        React.createElement(Contact, {
          close: () => win.close(),
        }),
        win.body
      )
    }}
  >
    Contact
  </button>
)

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <div style={{ margin: "auto" }}>
        <Link to="/">Home</Link> {" | "}
        {checkScreenWidthMobile() ? (
          <Link to="/contact">Contact</Link>
        ) : (
          desktopButton
        )}
        {" | "}
        <a
          href="https://github.com/whileTrueFalse"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://www.canva.com/design/DAGWYNkhHyA/cHMTmi23lKQr_YoYF8CCJQ/view?utm_content=DAGWYNkhHyA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h93a5d80da5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <span
        style={{
          margin: "auto",
          fontSize: "xx-small",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        © 2021-{new Date().getFullYear()} Samarth Ganorkar {" | "} 404 must be found somewhere🧮
      </span>
    </footer>
  )
}

export default Footer
