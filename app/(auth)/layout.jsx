import Link from 'next/link'
import React from 'react'

export default function AuthLayout() {
  return (
    <>
        <Nav>
            <h1>Dojo Helpdesk</h1>
            <Link href="/singup">Sing up</Link>
            <Link href="/login">Longin</Link>
        </Nav>
        {children}
    </>
  )
}
