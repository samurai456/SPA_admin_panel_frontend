import { useState } from 'react'
import { Toast } from 'react-bootstrap'

function ToastComponent({text, showToast, setShowToast}) {
  return (
      <Toast
        onClose={() => setShowToast(false)}
        autohide
        show={showToast}
        delay={1500}
        className='position-absolute m-auto start-0 end-0'
      >
        <Toast.Body>{text}</Toast.Body>
      </Toast>
  )
}

export { ToastComponent };