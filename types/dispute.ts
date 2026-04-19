export type DisputeStatus = 'open' | 'under_review' | 'appealed' | 'resolved'

export type DisputeAction = 'submit_for_review' | 'resolve' | 'appeal' | 'resolve_appeal'

export interface DisputeEvent {
  id: string
  action: DisputeAction | 'created'
  fromStatus: DisputeStatus | null
  toStatus: DisputeStatus
  performedBy: string
  performedByRole: string
  note?: string
  timestamp: string
}

export interface Dispute {
  id: string
  assetId: string
  assetTitle: string
  claimantId: string
  claimantName: string
  status: DisputeStatus
  reason: string
  description: string
  policyId: string
  territoryGroupId: string
  territoryGroupName: string
  events: DisputeEvent[]
  priority: 'low' | 'medium' | 'high' | 'critical'
  createdAt: string
  updatedAt: string
}