import { NextResponse } from "next/server";

export async function GET(){
    const res = await fetch('http://192.168.1.2:4000/tickets')
    // console.log("res:", res)

    const tickets = await res.json()
    // console.log("tickets:", tickets)

    return NextResponse.json(tickets, {
        status: 200
    })
}