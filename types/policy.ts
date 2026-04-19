export type PolicyAction = 'allow' | 'block' | 'monetise'

export interface TerritoryGroup {
  id: string
  name: string
  territories: string[]
  description?: string
  isDefault: boolean
}

export interface PolicyRule {
  territoryGroupId: string
  territoryGroupName: string
  action: PolicyAction
}

export interface Policy {
  id: string
  assetId: string
  assetTitle: string
  name: string
  rules: PolicyRule[]
  isActive: boolean
  createdBy: string
  createdByRole: string
  createdAt: string
  updatedAt: string
}