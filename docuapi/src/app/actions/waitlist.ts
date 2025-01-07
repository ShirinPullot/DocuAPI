'use server'

import 'dotenv/config';
import nodemailer from 'nodemailer'

export async function joinWaitlist(prevState: unknown, formData: FormData) {
  const userEmail = formData.get('email') as string

  if (!userEmail) {
    return { success: false, message: 'Email is required' }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_APP_PASSWORD
    }
  })

  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_APP_PASSWORD) {
      console.error('Missing SMTP credentials:', {
        user: process.env.SMTP_USER ? 'present' : 'missing',
        pass: process.env.SMTP_APP_PASSWORD ? 'present' : 'missing'
      });
      return { success: false, message: 'Server configuration error' };
    }
    
    await transporter.sendMail({
      from: '"DocuAPI Waitlist" <noreply@docuapi.com>',
      to: "pullotshirin@gmail.com",
      subject: "New Waitlist Signup",
      text: `New user signed up for the waitlist: ${userEmail}`,
      html: `<p>New user signed up for the waitlist: <strong>${userEmail}</strong></p>`
    })
    

    return { success: true, message: 'Thank you for joining our waitlist!' }
  } catch (error) {
    console.error('Error sending email:', error)
    if (process.env.NODE_ENV === 'development') {
      console.error('Detailed error:', error)
    }
    return { success: false, message: 'An error occurred. Please try again later.' }
  }
}

