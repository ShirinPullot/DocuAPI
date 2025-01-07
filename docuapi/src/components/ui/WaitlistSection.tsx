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
    <section id="waitlist" className="py-16 sm:py-24 bg-gray-800 text-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Join the Waitlist
            </h2>
            <p className="mx-auto max-w-[600px] text-base sm:text-lg md:text-xl text-gray-400 px-4">
              Be the first to experience our revolutionary document API. Sign up for early access and exclusive benefits.
            </p>
          </div>
          
          <div className="w-full max-w-md space-y-3 sm:space-y-4 px-4">
            <form 
              action={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-grow">
                <input
                  className="w-full px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-400 text-base"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={isPending}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 disabled:opacity-70 text-white rounded-lg font-semibold transition-all duration-200 whitespace-nowrap flex items-center justify-center text-base"
              >
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    <span>Joining...</span>
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>
            
            {state && (
              <div className="px-3 py-2 rounded-lg bg-opacity-10 text-sm sm:text-base transition-all">
                <p className={`font-medium ${
                  state.success 
                    ? 'text-green-400 bg-green-500/10' 
                    : 'text-red-400 bg-red-500/10'
                } rounded-lg px-3 py-2`}>
                  {state.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}