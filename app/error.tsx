'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>
        مشکلی پیش آمده است
      </h2>
      <button
        onClick={
          () => reset()
        }
      >
        دوباره امتحان کردن
      </button>
    </div>
  )
}