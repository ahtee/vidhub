import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"
import Overview from "./overview"
import Settings from "./settings"
import Billing from "./billing"

const Account = () => {
  const user = getProfile()

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  return (
    <div>
      <nav>
        <Link to="/account">Overview</Link>
        <Link to="/account/settings">Settings</Link>
        <Link to="/account/billing">Billing</Link>
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Logout
        </a>
      </nav>
      <Router>
        <Overview path="/account" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </div>
  )
}

export default Account
