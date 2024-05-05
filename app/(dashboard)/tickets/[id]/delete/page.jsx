"use client"

import React from 'react'
import { useRouter } from "next/navigation"

const url1 = "http://localhost:4000/tickets"
const url2 = "http://192.168.1.2:4000/tickets"

const handleDelete = (id) => {
    const router = useRouter()
    fetch(`${url1}/${id}`, {
        method: 'DELETE'
    }).then(() => {
        router.refresh()
        router.push('/tickets')
    })
}

export default async function DeleteTicket(prop) {
  const id = prop.params.id
  // console.log(typeof(id))
  // console.log("prop:", prop)
  // console.log(id)

  handleDelete(id)
}
