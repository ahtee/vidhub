import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavigationItemStyle = styled(Link)`
  color: #51cc00;
  text-decoration: none;
  margin: 0px 7px;
`

function NavigationItems(props) {
  const { navLinks } = props

  const NavigationItems = styled.div`
    ${'right' in props && `margin-left: auto`}
  `
  return (
    <NavigationItems>
      {navLinks.map((link, index) => (
        <NavigationItemStyle key={index} to={link.to}>
          {link.title}
        </NavigationItemStyle>
      ))}
    </NavigationItems>
  )
}

export default NavigationItems

NavigationItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      title: PropTypes.string
    }).isRequired
  )
}
