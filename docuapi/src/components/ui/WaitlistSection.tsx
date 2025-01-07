'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import { joinWaitlist } from '@/app/actions/waitlist'

export default function WaitlistSection() {
  const [state, formAction] = useActionState(joinWaitlist, null)
  const [email, setEmail] = useState('')

  return (
    <section id="waitlist" className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
              Join the Waitlist
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Be the first to experience our revolutionary document API. Sign up for early access and exclusive benefits.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form action={formAction} className="flex flex-col sm:flex-row gap-2">
              <input
                className="flex-grow px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-500"
                placeholder="Enter your email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-colors duration-200 whitespace-nowrap">
                Join Waitlist
              </button>
            </form>
            {state && (
              <p className={`mt-4 text-sm ${state.success ? 'text-green-600' : 'text-red-600'} font-medium`}>
                {state.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

