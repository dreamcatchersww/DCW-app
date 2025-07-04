type NextFetchRequestConfig = {
  revalidate?: number | false
  tags?: string[]
  cache?: 'no-store' | 'force-cache'
}
interface FetchAPIOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  authToken?: string
  body?: Record<string, unknown>
  next?: NextFetchRequestConfig
}

export async function fetchAPI(url: string, options: FetchAPIOptions) {
  const { method, authToken, body, next } = options

  const requestOptions: RequestInit & { next?: NextFetchRequestConfig } = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(next && { next }),
  }

  try {
    console.log('Fetching:', url)

    const response = await fetch(url, requestOptions)

    const contentType = response.headers.get('content-type')
    if (
      contentType &&
      contentType.includes('application/json') &&
      response.ok
    ) {
      return await response.json()
    } else {
      return { status: response.status, statusText: response.statusText }
    }
  } catch (error) {
    console.error(`Error ${method} data:`, error)
    throw error
  }
}
