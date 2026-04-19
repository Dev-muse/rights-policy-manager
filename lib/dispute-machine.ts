import type { DisputeStatus, DisputeAction } from '@/types/dispute'

const TRANSITIONS: Record<DisputeStatus, { action: DisputeAction; to: DisputeStatus }[]> = {
  open: [{ action: 'submit_for_review', to: 'under_review' }],
  under_review: [
    { action: 'resolve', to: 'resolved' },
    { action: 'appeal', to: 'appealed' },
  ],
  appealed: [{ action: 'resolve_appeal', to: 'resolved' }],
  resolved: [],
}

export function getValidTransitions(status: DisputeStatus): DisputeAction[] {
  return TRANSITIONS[status]?.map((t) => t.action) ?? []
}

export function applyTransition(currentStatus: DisputeStatus, action: DisputeAction): DisputeStatus {
  const transition = TRANSITIONS[currentStatus]?.find((t) => t.action === action)
  if (!transition) {
    throw new Error(`Invalid transition: cannot '${action}' from '${currentStatus}'`)
  }
  return transition.to
}

export function isTerminal(status: DisputeStatus): boolean {
  return TRANSITIONS[status]?.length === 0
}