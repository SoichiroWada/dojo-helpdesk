"use client"

import React from 'react'
import { useRouter } from "next/navigation"

const handleDelete = (id) => {
    const router = useRouter()
    fetch(`http://192.168.1.20:4000/tickets/${id}`, {
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

  // return (
  //   <div>
  //   <div>delete</div>
  //   <div>{prop.params.id}</div>
  //   </div>
  // )
}
