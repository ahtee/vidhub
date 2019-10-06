import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <header
    style={{
      background: `#343a40`,
      marginBottom: `1.7rem`,
      color: `#51cc00`,
      padding: `.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#32cd32`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        <Link
          to="/browse"
          style={{
            color: `#51cc00`,
            textDecoration: `none`,
            margin: "0px 7px",
          }}
        >
          Browse
        </Link>
        <Link
          to="/account"
          style={{
            color: `#51cc00`,
            textDecoration: `none`,
            marginLeft: "auto",
          }}
        >
          Login
        </Link>
      </div>
    </div>
  </header>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
