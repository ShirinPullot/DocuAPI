'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What types of files can I store with DocuAPI?',
    answer: 'DocuAPI supports a wide range of file formats, including but not limited to: documents (DOC, DOCX, PDF, TXT), images (JPG, PNG, GIF, SVG), audio (MP3, WAV, AAC), video (MP4, AVI, MOV), and more. If you have a specific file type you need to store, feel free to contact us for confirmation.',
  },
  {
    question: 'How does the API work?',
    answer: 'Our API provides simple endpoints for uploading, retrieving, and searching files of all supported formats. You can integrate it into your application using our SDK or by making direct HTTP requests.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take security seriously. All data, regardless of file type, is encrypted at rest and in transit. We also offer features like access controls and audit logs to ensure the safety of your information.',
  },
  {
    question: 'Can I search within the content of my stored files?',
    answer: 'Yes, our advanced search capabilities allow you to search within the content of many file types, including text documents, PDFs, and even the metadata of audio and video files. This makes it easy to find the exact information you need across your entire document library.',
  },
  {
    question: 'Can I try the API before purchasing?',
    answer: 'We offer a free trial period where you can test out all the features of our API with various file formats. Sign up for the waitlist to get notified when the trial becomes available.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-lg focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

