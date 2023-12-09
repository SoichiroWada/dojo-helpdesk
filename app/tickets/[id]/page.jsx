import Link from 'next/link'
import React from 'react'

async function getTicket(id) {
    const res = await fetch(`http://192.168.1.20:4000/tickets/${id}`, {
        next: {
            revalidate: 10
        }
    })
    return res.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id)

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
                <Link href="/tickets">
                    <button>Return to Tickets</button>
                </Link>
            </div>
        </main>
    )
}
