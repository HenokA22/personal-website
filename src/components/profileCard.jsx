import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Contact modal
function ProfileCard() {
  const [showEmailModal, setShowEmailModal] = useState(false)

  // Contact form state
  const [senderEmail, setSenderEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('')

  // Prevent background scroll when modal open
  useEffect(() => {
    if (showEmailModal) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    // Cleanup on unmount
    return () => document.body.classList.remove('modal-open')
  }, [showEmailModal])

  // Close on Escape key
  useEffect(() => {
    if (!showEmailModal) {
      return
    }

    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeEmailModal()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showEmailModal])

  // Opening and closing handlers
  const openEmailModal = (e) => {
    e.preventDefault()
    setShowEmailModal(true)
  }

  const closeEmailModal = () => {
    setShowEmailModal(false)
    // Reset form after closing it
    setTimeout(() => {
      setSenderEmail('')
      setSubject('')
      setMessage('')
      setStatus('idle')
      setStatusMessage('')
    }, 200)
  }

  const handleSendEmail = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setStatusMessage('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Validate that environment variables are present
    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setStatusMessage('Email service is currently unavailable. Please reach out directly.')
      return
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name: senderEmail,
            email: senderEmail,
            from_email: senderEmail,
            subject: subject,
            title: subject,
            message: message,
            to_email: 'henoka206@gmail.com',
          },
        }),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        const errorText = await response.text()
        console.error('EmailJS send error:', errorText)
        setStatus('error')
        setStatusMessage('Unable to send your message right now. Please try again or reach out directly.')
      }
    } catch (err) {
      console.error('Network error sending email:', err)
      setStatus('error')
      setStatusMessage('Network error occurred. Please check your connection or reach out directly.')
    }
  }

  return (
    <div className="prof-card">
      <div className="text-center">
        <img src="/BadgePhoto.jpg" className="rounded-circle" id="profpic" alt="Henok Assalif" />
      </div>
      <h2 className="text-center">
        <span>Henok Assalif</span>
      </h2>
      <div className="text-center">
        <a href="https://github.com/HenokA22" target="_blank" rel="noreferrer"><i className="fab fa-github social-icon"></i></a>

        <a href="https://www.linkedin.com/in/henok206/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin social-icon"></i></a>

        {/* Email icon triggers modal */}
        <a href="mailto:henoka206@gmail.com" onClick={openEmailModal} title="Send an email"><i className="fas fa-envelope social-icon"></i></a>

        <a href="https://www.instagram.com/henok.206" target="_blank" rel="noreferrer"><i className="fab fa-instagram social-icon"></i></a>
      </div>

      {/* Create Portal is used to render the DOM element under document.body */}
      {showEmailModal && createPortal(
        <div
          className="contact-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="email-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeEmailModal()
          }}
        >
          <div className="contact-modal" role="document">
            <div className="contact-modal-header">
              <h5 id="email-modal-title" className="contact-modal-title">Send a Message</h5>
              <button className="contact-modal-close-btn" aria-label="Close" onClick={closeEmailModal}>×</button>
            </div>

            <div className="contact-modal-body">
              {status === 'success' ? (
                <div className="contact-form-success">
                  <i className="fas fa-check-circle success-icon"></i>
                  <p><strong>Message sent successfully!</strong></p>
                  <p style={{ fontSize: '0.85rem', color: '#666' }}>Thanks for reaching out. I'll get back to you soon.</p>
                  <button type="button" className="contact-btn-secondary" onClick={closeEmailModal}>Close</button>
                </div>
              ) : (
                <form onSubmit={handleSendEmail} className="contact-form">
                  <div className="contact-form-group">
                    <label htmlFor="contact-sender-email">Your Email</label>
                    <input
                      id="contact-sender-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="Subject of your message"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={status === 'sending'}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="contact-form-error" role="alert">
                      {statusMessage}
                      <div style={{ fontSize: '0.8rem' }}>
                        Or email me directly at <a href="mailto:henoka206@gmail.com">henoka206@gmail.com</a>
                      </div>
                    </div>
                  )}

                  <div className="contact-form-actions">
                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default ProfileCard

