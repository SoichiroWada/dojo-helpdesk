"use client"

import React from 'react'
import { useRouter } from "next/navigation"
import { useState } from "react"

async function handleDelete(id) {
  const router = useRouter()

  const res = await fetch(`http://192.168.1.20:4000/tickets/${id}`, {        
      method: "DELETE"
  })

  if(res.status === 201){
    router.refresh()
    router.push('/tickets')
  }
}

export default function DeleteTicket(prop) {

  const id = prop.params.id
  console.log("prop:", prop)
  console.log(id)
  console.log(typeof(id))
  // const url = window.location.href
  // const search = url.search("tickets")
  // console.log(search)
  React.useEffect(() => {
    // window is accessible here.
    const url = window.location.href
    console.log(url)
    const search = url.search("tickets") 
    console.log(search);
  }, []);

  return (
    <div>
    <div>delete</div>
    <div>{prop.params.id}</div>
    </div>
  )
}
