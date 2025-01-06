'use server'

import nodemailer from 'nodemailer'

export async function joinWaitlist(prevState: any, formData: FormData) {
  const userEmail = formData.get('email') as string

  if (!userEmail) {
    return { success: false, message: 'Email is required' }
  }

  const transporter = nodemailer.createTransport({
    // Replace with your email service configuration
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: "your_email@example.com",
      pass: "your_password"
    }
  })

  try {
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
    return { success: false, message: 'An error occurred. Please try again later.' }
  }
}

