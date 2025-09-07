
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Simple contact modal (internal) – keeps implementation local to the profile card.
function ProfileCard() {
  const [showEmailModal, setShowEmailModal] = useState(false)

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

  const closeEmailModal = () => setShowEmailModal(false)

  return (
    <div className="prof-card">
      <div className="text-center">
        <img src="/BadgePhoto.jpg" className="rounded-circle" id="profpic" />
      </div>
      <h2 className="text-center">
        <span>Henok Assalif</span>
      </h2>
      <div className="text-center">
        <a href="https://github.com/HenokA22" target="_blank"><i className="fab fa-github social-icon"></i></a>

        <a href="https://www.linkedin.com/in/henok206/" target="_blank"><i className="fab fa-linkedin social-icon"></i></a>

        {/* Email icon triggers modal instead of navigating away */}
        <a href="mailto:henoka206@gmail.com" onClick={openEmailModal}><i className="fas fa-envelope social-icon"></i></a>

        <a href="https://www.instagram.com/henok.206" target="_blank"><i className="fab fa-instagram social-icon"></i></a>
      </div>

      {/* Create Portal is used to render the DOM element under document.body */}
      {showEmailModal && createPortal(
        <div
          className="contact-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="email-modal-title"
        >
          <div className="contact-modal" role="document">
            <div className="contact-modal-header">
              <h5 id="email-modal-title" className="contact-modal-title">Email</h5>
              <button className="contact-modal-close-btn" aria-label="Close" onClick={closeEmailModal}>×</button>
            </div>

            <div className="contact-modal-body">
              <p>You can reach me at this email address: <a href="mailto:henoka206@gmail.com">henoka206@gmail.com</a></p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default ProfileCard
