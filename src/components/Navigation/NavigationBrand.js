import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Brand = styled.h1`
  margin: 0px;
`

function NavigationBrand({ siteTitle }) {
  return (
    <Brand>
      <Link
        to="/"
        style={{
          color: `#32cd32`,
          textDecoration: `none`
        }}
      >
        {siteTitle}
      </Link>
    </Brand>
  )
}

NavigationBrand.propTypes = {
  siteTitle: PropTypes.string
}

NavigationBrand.defaultProps = {
  siteTitle: ``
}

export default NavigationBrand
