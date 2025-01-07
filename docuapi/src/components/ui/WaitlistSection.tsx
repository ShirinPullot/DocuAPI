'use client'

import { useState, useTransition } from 'react'
import { useActionState } from 'react'
import { joinWaitlist } from '@/app/actions/waitlist'
import { Loader2 } from 'lucide-react'

export default function WaitlistSection() {
  const [state, formAction] = useActionState(joinWaitlist, null)
  const [email, setEmail] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData)
    })
  }

  return (
    <section id="waitlist" className="py-24 bg-gray-800 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Join the Waitlist
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Be the first to experience our revolutionary document API. Sign up for early access and exclusive benefits.
            </p>
          </div>
          <div className="w-full max-w-md space-y-4">
            <form action={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                className="flex-grow px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-400"
                placeholder="Enter your email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                disabled={isPending}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white rounded-md font-semibold transition-all duration-200 whitespace-nowrap flex items-center justify-center"
              >
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    Joining...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>
            {state && (
              <p className={`mt-4 text-sm ${state.success ? 'text-green-400' : 'text-red-400'} font-medium`}>
                {state.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

