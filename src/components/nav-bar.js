import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'

export default function NavBar() {
  console.log()
  const greetingMessage = isLoggedIn() ?
    `Hello ${getUser().name}`
    : "You are not logged in"

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{greetingMessage}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={e => {
              e.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >Logout</a>
        ) : null }
      </nav>
    </div>
  )
}