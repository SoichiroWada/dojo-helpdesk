import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './dojo-logo.png'

export default function Navbar({ user }) {
  return (
    <nav>
      <Link href="/">
        <Image
          src={Logo}
          alt='Dojo Helpdesk logo'
          width={70}
          quality={100}
          placeholder='blur'
        ></Image>
        </Link>
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Create Ticket</Link>
      { user && <span>Hello, {user.email}</span> }
    </nav>
  )
}
