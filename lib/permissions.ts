import type { Role, Permission } from '@/types/auth'

const PERMISSION_MATRIX: Record<Role, Permission[]> = {
  label_admin: [
    'asset:read', 'asset:write',
    'policy:read', 'policy:write', 'policy:delete',
    'dispute:read', 'dispute:create', 'dispute:review', 'dispute:resolve',
    'settings:read', 'settings:write',
  ],
  publisher: [
    'asset:read',
    'policy:read',
    'dispute:read', 'dispute:create', 'dispute:appeal',
    'settings:read',
  ],
  viewer: [
    'asset:read',
    'policy:read',
    'dispute:read',
    'settings:read',
  ],
}

export function hasPermission(role: Role, permission: Permission): boolean {
  return PERMISSION_MATRIX[role]?.includes(permission) ?? false
}

export function getPermissions(role: Role): Permission[] {
  return PERMISSION_MATRIX[role] ?? []
}

export function hasAnyPermission(role: Role, permissions: Permission[]): boolean {
  return permissions.some((p) => hasPermission(role, p))
}

export function hasAllPermissions(role: Role, permissions: Permission[]): boolean {
  return permissions.every((p) => hasPermission(role, p))
}