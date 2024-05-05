import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

const url1 = "http://localhost:4000/tickets"
const url2 = "http://192.168.1.2:4000/tickets"

export async function GET(){
    const res = await fetch('url1')

    const tickets = await res.json()

    return NextResponse.json(tickets, {
        status: 200
    })
}

export async function POST(request){
    const ticket = await request.json()

    const res = await fetch('url1', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(ticket)
    })

    const newTicket = await res.json()

    return NextResponse.json(newTicket, {
        status: 200
    })
}