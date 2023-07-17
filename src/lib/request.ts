import createClient from 'openapi-fetch'
import type { paths } from '../../openapi'

export const { get, post, patch, put, del } = createClient<paths>({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include'
})
