import Link from 'next/link'
import React from 'react'

const url1 = "http://localhost:4000/tickets"
const url2 = "http://192.168.1.2:4000/tickets"

//revalicate 30 seconds means that within 30 seconds, this function uses cache data.
async function getTickets() {

      // imitate delay
    await new Promise(resolve => setTimeout(resolve, 200))

    const res = await fetch(url1, {
        next: {
            revalidate: 0
        }
    })
    return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()
    // console.log("tickets",tickets);

  return (
    <>
        {tickets.map((ticket) => (
            <div key={ticket.id} className="card my-5">
                <Link href={`/tickets/${ticket.id}`}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0,200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                </Link>
            </div>
        
        ))}
        {tickets.length === 0 && (
            <p className="text-center">There are no open tickets, yay!</p>
        )}
    </>
  )
}
