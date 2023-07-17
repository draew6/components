import type { paths } from '../../openapi'

export type Invitation = paths['/route']['get']['responses']['200']['content']['application/json']['data'][0]
