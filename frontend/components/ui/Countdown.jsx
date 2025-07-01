import { useEffect, useState } from 'react'

export default function Countdown({ initialTime = 40 }) {
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    if (timeLeft === 0) return
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [timeLeft])
  return <p className="mt-2 text-gray-500 text-sm">Time left: {timeLeft}s</p>
}
