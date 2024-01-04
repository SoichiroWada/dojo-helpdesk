import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useRouter } from "next/navigation"
import React from 'react'

export const dynamicParams = true

export async function generateStaticParams () {
    const res = await fetch('http://192.168.1.20:4000/tickets')

    const tickets = await res.json()

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

async function getTicket(id) {
      // imitate delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const res = await fetch(`http://192.168.1.20:4000/tickets/${id}`, {
        next: {
            revalidate: 120
        }
    })

    if (!res.ok) { notFound() }
    return res.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id)
    // console.log(params.id)
    const url = `/tickets/${params.id}/delete`

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>Ticket ID: {ticket.id}</p>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
                <div className="flex space-x-4">
                    <div className="flex items-center justify-cetner">
                        <Link href="/tickets">
                            <button className="bg-purple-500  text-white">Return to Tickets</button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-cetner">
                        <Link href={ url}>
                            <button className=" bg-pink-500  text-white">Delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
