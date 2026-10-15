import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(Boolean(url))

  useEffect(() => {
    if (!url) return undefined

    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        return response.json()
      })
      .then(setData)
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [url])

  return { data, error, isLoading }
}

export default useFetch
