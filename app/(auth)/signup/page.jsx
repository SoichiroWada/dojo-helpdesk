"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import React, { useState } from 'react'
import AuthForm from "../AuthForm"

export default function Signup() {
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}