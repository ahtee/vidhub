import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `black`,
      color: `white`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </p>
      &copy; {new Date().getFullYear()}
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ``
}

export default Footer
