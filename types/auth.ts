export type Role = 'label_admin' | 'publisher' | 'viewer'

export type Permission =
  | 'asset:read'
  | 'asset:write'
  | 'policy:read'
  | 'policy:write'
  | 'policy:delete'
  | 'dispute:read'
  | 'dispute:create'
  | 'dispute:review'
  | 'dispute:appeal'
  | 'dispute:resolve'
  | 'settings:read'
  | 'settings:write'

export interface User {
  id: string
  name: string
  email: string
  role: Role
  organisationId: string
  organisationName: string
  avatarUrl?: string
}