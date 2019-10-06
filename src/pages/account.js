import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const Overview = ({ user }) => <p>Hello {user ? `${user.name}!` : "friend!"}</p>
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

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
          Log Out
        </a>
      </nav>
      <Router>
        <Overview path="/account" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
      <small>This is going to be a protected route.</small>
    </div>
  )
}

export default Account
