import React, { useState } from "react"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

import "react-toggle/style.css"

const Header = ({ siteTitle }) => {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("isLoaded") || false
      : false
  )

  return (
    <header>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <h1 style={{ 
          fontSize: "1.8rem", 
          marginRight: "0.5rem",
          color: "#e95420",
          fontFamily: "Ubuntu Mono, monospace"
        }}>{"samarth@portfolio:~$"}</h1>
        <h1 style={{ 
          fontSize: "1.8rem",
          fontFamily: "Ubuntu Mono, monospace",
          color: "#ffffff"
        }}>
          {isLoaded ? (
            "Samarth Ganorkar"
          ) : (
            <Typewriter
              style={{ marginTop: 0, paddingTop: 0 }}
              options={{
                deleteSpeed: "natural",
                delay: 80
              }}
              onInit={typewriter => {
                typewriter
                  .typeString("ML engineer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Ethical Hacker")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Samarth Ganorkar")
                  .callFunction(() => {
                    setIsLoaded(true)
                  })
                  .start()
              }}
            />
          )}
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
