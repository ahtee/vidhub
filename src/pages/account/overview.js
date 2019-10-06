import React from "react"

const Overview = ({ user }) => <p>Hello {user ? `${user.name}!` : "friend!"}</p>
export default Overview
