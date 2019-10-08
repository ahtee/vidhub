import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import NavigationBrand from './NavigationBrand'
import NavigationItems from './NavigationItems'

const NavTheme = styled.header`
  background: #343a40;
  margin-bottom: 1.7rem;
  color: #51cc00;
  padding: 0.5rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  align-items: center;
`

function Navigation(props) {
  const { siteTitle, navLinks } = props

  return (
    <NavTheme>
      <Container>
        <NavigationBrand siteTitle={siteTitle} />
        <NavigationItems navLinks={navLinks} right />
      </Container>
    </NavTheme>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string
}

Navigation.defaultProps = {
  siteTitle: ``
}

export default Navigation
