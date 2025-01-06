'use client'

import { useState, useActionState } from 'react'
import { joinWaitlist } from '@/app/actions/waitlist'

export default function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, null)
  const [email, setEmail] = useState('')

  return (
    <div className="max-w-md mx-auto">
      <form action={formAction} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Join Waitlist
        </button>
      </form>
      {state && (
        <p className={`mt-4 text-center ${state.success ? 'text-green-600' : 'text-red-600'}`}>
          {state.message}
        </p>
      )}
    </div>
  )
}

