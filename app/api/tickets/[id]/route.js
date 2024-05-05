import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(_, { params }){
    const url1 = "http://localhost:4000/tickets"
    const url2 = "http://192.168.1.2:4000/tickets"
    const id = params.id

    const res = await fetch(`${url1}/${id}`)
    const ticket = await res.json()
    // console.log("tickets:", tickets)

    if (!res.ok) {
        return NextResponse.json({error: 'Cannot find the ticket'}, {
            status: 404
        })
    }

    return NextResponse.json(ticket, {
        status: 200
    })
}