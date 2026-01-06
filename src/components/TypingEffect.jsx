import { useState, useEffect } from 'react'

export function TypingEffect({ text, speed = 50, className = '' }) {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [displayedText, text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const isTyping = displayedText.length < text.length

  return (
    <span className={className}>
      {displayedText}
      <span 
        className={`inline-block w-[2px] h-[1em] bg-current ml-1 align-middle ${
          isTyping || showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-150`}
        aria-hidden="true"
      />
    </span>
  )
}

